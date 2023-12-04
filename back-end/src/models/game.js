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
      "GROUP_CONCAT(DISTINCT Platforms.Name) AS Platforms, " +
      "GROUP_CONCAT(DISTINCT Categories.Name) AS Categories " +
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
      Platforms: row.Platforms ? row.Platforms.split(",") : [],
      Categories: row.Categories ? row.Categories.split(",") : []
    }));
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Jogos: ${error}`);
    throw error;
  }
};

export const getOne = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Games WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Game: ${error}`)
  }
}

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
    const result = await sequelize.query(
      "DELETE FROM Games WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.UPDATE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao deleta Jogo: ${error}`)
  }
}