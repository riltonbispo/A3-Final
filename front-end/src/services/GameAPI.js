import axios from 'axios'

export const getGames = async () => {
  try {
    const response = await axios.get('http://localhost:3000/games');
    return response.data
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
  }
}