import { DataTypes } from "sequelize";
import { sequelize } from "../configDB.js";
import { QueryTypes } from "sequelize";

export const Game = sequelize.define('Game', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  User_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export const getAll = async () => {
  try {
    const result = await sequelize.query(
      "SELECT Games.*, " +
      "GROUP_CONCAT(DISTINCT Platforms.ID || ':' || Platforms.Name) AS Platforms, " +
      "GROUP_CONCAT(DISTINCT Categories.ID || ':' || Categories.Name) AS Categories " +
      "FROM Games " +
      "LEFT JOIN GamePlatforms ON Games.ID = GamePlatforms.Game_ID " +
      "LEFT JOIN Platforms ON GamePlatforms.Platform_ID = Platforms.ID " +
      "LEFT JOIN GameCategories ON Games.ID = GameCategories.Game_ID " +
      "LEFT JOIN Categories ON GameCategories.Category_ID = Categories.ID " +
      "GROUP BY Games.ID;",
      { type: QueryTypes.SELECT }
    );
    return result.map(row => ({
      ...row,
      Platforms: row.Platforms
        ? row.Platforms.split(",").map(platform => {
          const [ID, Name] = platform.split(":");
          return { ID: parseInt(ID), Name };
        })
        : [],
      Categories: row.Categories
        ? row.Categories.split(",").map(category => {
          const [ID, Name] = category.split(":");
          return { ID: parseInt(ID), Name };
        })
        : [],
    }));
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Jogos: ${error}`);
    throw error;
  }
};

export const getOne = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT Games.*, " +
      "GROUP_CONCAT(DISTINCT Platforms.ID || ':' || Platforms.Name) AS Platforms, " +
      "GROUP_CONCAT(DISTINCT Categories.ID || ':' || Categories.Name) AS Categories " +
      "FROM Games " +
      "LEFT JOIN GamePlatforms ON Games.ID = GamePlatforms.Game_ID " +
      "LEFT JOIN Platforms ON GamePlatforms.Platform_ID = Platforms.ID " +
      "LEFT JOIN GameCategories ON Games.ID = GameCategories.Game_ID " +
      "LEFT JOIN Categories ON GameCategories.Category_ID = Categories.ID " +
      "WHERE Games.ID = ? " +
      "GROUP BY Games.ID;",
      {
        replacements: [id],
        type: QueryTypes.SELECT
      }
    );

    if (result.length > 0) {
      return {
        ...result[0],
        Platforms: result[0].Platforms
          ? result[0].Platforms.split(",").map(platform => {
            const [ID, Name] = platform.split(":");
            return { ID: parseInt(ID), Name };
          })
          : [],
        Categories: result[0].Categories
          ? result[0].Categories.split(",").map(category => {
            const [ID, Name] = category.split(":");
            return { ID: parseInt(ID), Name };
          })
          : [],
      };
    } else {
      return null;
    }
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Game: ${error}`);
    throw error;
  }
};


export const update = async (id, newData) => {
  try {
    const { Name, Image, Rating } = newData;
    const result = await sequelize.query(
      "UPDATE Games SET Name = :Name, Image = :Image, Rating = :Rating WHERE ID = :ID;",
      {
        replacements: { ID: id, Name, Image, Rating },
        type: QueryTypes.UPDATE,
      }
    );
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao atualizar Jogo: ${error}`)
  }
}

export const del = async (id) => {
  try {
    await sequelize.query("DELETE FROM GamePlatforms WHERE Game_ID = ?;", {
      replacements: [id],
      type: QueryTypes.DELETE,
    });

    await sequelize.query("DELETE FROM GameCategories WHERE Game_ID = ?;", {
      replacements: [id],
      type: QueryTypes.DELETE,
    });

    await sequelize.query("DELETE FROM Games WHERE ID = ?;", {
      replacements: [id],
      type: QueryTypes.DELETE,
    });
  } catch (error) {
    console.log(`BANCO: Erro ao deleta Jogo: ${error}`)
  }
}