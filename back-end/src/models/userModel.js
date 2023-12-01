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
    const users = [
      'user1@example.com',
      'user2@example.com',
      'user3@example.com',
      'user4@example.com',
      'user5@example.com',
      'user6@example.com',
      'user7@example.com',
      'user8@example.com',
      'user9@example.com',
      'user10@example.com',
    ]

    const existingUsers = await User.findAll();

    if (existingUsers.length === 0) {
      await User.bulkCreate(users.map(user => ({ Email: user })));
      console.log('Banco de dados sincronizado e 10 usuarios criadas');
    }

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