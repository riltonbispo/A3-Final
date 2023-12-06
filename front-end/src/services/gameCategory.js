import axios from 'axios'

export const createGameCateogry = async (gameID, categoryID) => {
  try {
    const response = await axios.post(`http://localhost:3000/games/${gameID}/categories`, {
      "Category_ID": categoryID
    });
    return response.data
  } catch (error) {
    console.error('Erro ao buscar plataforms:', error);
  }
}