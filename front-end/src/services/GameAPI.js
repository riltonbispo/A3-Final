import axios from 'axios'

export const getGames = async () => {
  try {
    const response = await axios.get('http://localhost:3000/games');
    return response.data
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
  }
}

export const updateGame = async (Name, Rating, Game_Id) => {
  try {
    const response = await axios.patch(`http://localhost:3000/games/${Game_Id}`, {
      Name,
      Rating
    });
    return response.data
  } catch (error) {
    console.log(error)
  }
}