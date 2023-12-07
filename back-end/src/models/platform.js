import { DataTypes } from "sequelize";
import { QueryTypes } from "sequelize";
import { sequelize } from "../configDB.js";

export const Platform = sequelize.define('Platform', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
})


export const initialPlatforms = async () => {
  try {
    const platforms = ['Steam', 'Epic Games', 'Ubisoft Store', 'GOG.com', 'Xbox App', 'Origin', 'Battler Net', 'Blizzard', 'PLayStore', 'App Store']
    const existingPlatforms = await Platform.findAll();

    if (existingPlatforms.length === 0) {
      await Platform.bulkCreate(platforms.map(platform => ({ Name: platform })));
      console.log('Banco de dados sincronizado e 10 plataformas criadas');
    }

  } catch (error) {
    console.log(`BANCO: Erro ao criar usuarios iniciais: ${error}`)
  }
}


export const getAll = async () => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Platforms;",
      { type: QueryTypes.SELECT }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Plataformas: ${error}`)
  }
}

export const getOne = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Platforms WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Plataforma: ${error}`)
  }
}

export const update = async (id,name) => {
  try {
    const result = await sequelize.query(
      "UPDATE Platforms SET Name = ? WHERE ID = ?;",
      {
        replacements: [name, id],
        type: QueryTypes.UPDATE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao atualizar Plataforma: ${error}`)
  }
}

export const del = async (id) => {
  try {
    await sequelize.query(
      "DELETE FROM GamePlatforms WHERE Platform_ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.DELETE
      }
    );

    const result = await sequelize.query(
      "DELETE FROM Platforms WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.DELETE
      }
    );
    return result;
  } catch (error) {
    console.log(`BANCO: Erro ao deletar Plataforma: ${error}`);
    throw error;
  }
};
