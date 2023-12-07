import { DataTypes } from "sequelize";
import { sequelize } from "../configDB.js";
import { QueryTypes } from "sequelize";

export const GamePlatform = sequelize.define('GamePlatform', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Game_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Games',
      key: 'ID',
    },
  },
  Platform_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Platforms',
      key: 'ID',
      onDelete: 'CASCADE'
    },
  },
});

export const getAll = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM GamePlatforms WHERE Game_ID = :ID ;",
      {
        replacements: { ID: id },
        type: QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar GamePlatforms: ${error}`)
  }
}

export const update = async (id, gameID, platformID) => {
  try {
    const result = await sequelize.query(
      "UPDATE GamePlatforms SET Game_ID = :Game_ID, Platform_ID = :Platform_ID WHERE ID = :ID;",
      {
        replacements: { ID: id, Game_ID: gameID, Platform_ID: platformID },
        type: QueryTypes.UPDATE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao atualizar GamePlatform: ${error}`)
  }
}

export const del = async (id) => {
  try {
    const result = await sequelize.query(
      "DELETE FROM GamePlatforms WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.DELETE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao deletar GamePlatforms: ${error}`)
  }
}