import express from 'express'
import { sequelize } from './configDB.js'
import userRoutes from './routes/userRoutes.js'

const PORT = 3000;
const app = express()
app.use(express.json())


const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('Banco de dados sincronizado');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
};

app.use('/users', userRoutes)

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
