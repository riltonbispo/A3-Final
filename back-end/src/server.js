import express from 'express'
import { sequelize } from './configDB.js'
import userRoutes from './routes/userRoutes.js'
import platformRoutes from './routes/platformRoutes.js'
import { User, initialUsers } from './models/userModel.js';
import { Platform, initialPlatforms } from './models/platformModel.js';

const PORT = 3000;
const app = express()
app.use(express.json())


const syncDatabase = async () => {
  try {
    await sequelize.sync();
    await initialUsers()
    await initialPlatforms()
    console.log('Banco de dados sincronizado');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

app.use('/users', userRoutes)
app.use('/platforms', platformRoutes)

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
