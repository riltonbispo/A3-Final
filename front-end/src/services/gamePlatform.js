import axios from 'axios'

export const createGamePlatofrm = async (gameID, platformID) => {
  try {
    const response = await axios.post(`http://localhost:3000/games/${gameID}/platforms`, {
      "Platform_ID": platformID
    });
    return response.data
  } catch (error) {
    console.error('Erro ao buscar plataforms:', error);
  }
}