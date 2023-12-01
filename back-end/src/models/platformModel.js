import { DataTypes } from "sequelize";
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