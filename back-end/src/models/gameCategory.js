import { DataTypes } from "sequelize";
import { sequelize } from "../configDB.js";
import { QueryTypes } from "sequelize";

export const GameCategory = sequelize.define('GameCategory', {
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
  Category_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'ID',
    },
  },
});

export const getAll = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM GameCategories WHERE Game_ID = :ID ;",
      {
        replacements: { ID: id },
        type: QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar GameCategories: ${error}`)
  }
}

export const del = async (id) => {
  try {
    const result = await sequelize.query(
      "DELETE FROM GameCategories WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.DELETE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao deletar GameCategories: ${error}`)
  }
}