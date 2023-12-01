import { DataTypes } from "sequelize";
import { sequelize } from "../configDB.js";
import { QueryTypes } from "sequelize";

export const User = sequelize.define('User', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
})

export const initialUsers = async () => {
  try {

    for (let i = 1; i <= 10; i++) {
      await User.create({
        Email: `user${i}@example.com`
      });
    }

    console.log('Banco de dados sincronizado e 10 usuários criados');
  } catch (error) {
    console.log(`BANCO: Erro ao criar usuarios iniciais: ${error}`)
  }
}

export const getAllUsers = async () => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Users;",
      { type: QueryTypes.SELECT }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Usuarios: ${error}`)
  }
}

export const getOneUser = async (id) => {
  try {
    const result = await sequelize.query(
      "SELECT * FROM Users WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.SELECT
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao buscar Usuario: ${error}`)
  }
}

// export const insertUser = async (email) => {
//   try {
//     const result = await sequelize.query(
//       "INSERT INTO Users (Email) VALUES (?);",
//       {
//         replacements: [email],
//         type: QueryTypes.INSERT
//       }
//     )
//     return result
//   } catch (error) {
//     console.log(`BANCO: Erro ao criar Usuario: ${error}`)
//   }
// }

export const updateUser = async (id, email) => {
  try {
    const result = await sequelize.query(
      "UPDATE Users SET Email = ? WHERE ID = ?;",
      {
        replacements: [email, id],
        type: QueryTypes.UPDATE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao atualizar Usuario: ${error}`)
  }
}

export const deleteUser = async (id) => {
  try {
    const result = await sequelize.query(
      "DELETE FROM Users WHERE ID = ?;",
      {
        replacements: [id],
        type: QueryTypes.UPDATE
      }
    )
    return result
  } catch (error) {
    console.log(`BANCO: Erro ao atualizar Usuario: ${error}`)
  }
}