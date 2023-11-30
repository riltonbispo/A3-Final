import { DataTypes } from "sequelize";
import { sequelize } from "../configDB.js";

export const User = sequelize.define('User', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
})

