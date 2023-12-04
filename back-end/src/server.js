import express from 'express'
import { sequelize } from './configDB.js'
import userRoutes from './routes/user.js'
import platformRoutes from './routes/platform.js'
import categoryRoutes from './routes/category.js'
import gameRoutes from './routes/game.js'
import { User, initialUsers } from './models/user.js';
import { Platform, initialPlatforms } from './models/platform.js';
import { Category, initialCategories } from './models/category.js'
import { Game } from './models/game.js'
import { GamePlatform } from './models/gamePlatform.js'
import { GameCategory } from './models/gameCategory.js'

const PORT = 3000;
const app = express()
app.use(express.json())

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    await initialUsers()
    await initialPlatforms()
    await initialCategories()
    console.log('Banco de dados sincronizado');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

app.use('/users', userRoutes)
app.use('/platforms', platformRoutes)
app.use('/categories', categoryRoutes)
app.use('/games', gameRoutes)

app.get('/', (req, res) => {
  res.json({
    message: "Bem Vindo a API A3 de Desenvolvimento Web"
  })
})

const startServer = async () => {
  await syncDatabase()
  app.listen(PORT, () => {
    console.log(`API Rodando na porta ${PORT}`);
  });
}

startServer();
