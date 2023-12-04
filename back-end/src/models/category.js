import { DataTypes } from "sequelize";
import { sequelize } from "../configDB.js";
import { QueryTypes } from "sequelize";

export const Category = sequelize.define('Category', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
})

export const initialCategories = async () => {
  try {
    const categories = ['Jogado', 'Jogando', 'Zerado', 'Nao Recomendo', 'outro status']
    const existingCategories = await Category.findAll();

    if (existingCategories.length === 0) {
      await Category.bulkCreate(categories.map(category => ({ Name: category })));
      console.log('Banco de dados sincronizado e categorias criadas');
    }

  } catch (error) {
    console.log(`BANCO: Erro ao criar categorias iniciais: ${error}`)
  }
}

export const getAllCategories = async () => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Categories;",
      { type: QueryTypes.SELECT }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Categorias: ${error}`)
  }
}

export const getOneCategory = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Categories WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Categoria: ${error}`)
  }
}