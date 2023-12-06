import axios from 'axios'

export const getPlatforms = async () => {
  try {
    const response = await axios.get('http://localhost:3000/platforms');
    return response.data
  } catch (error) {
    console.error('Erro ao buscar plataforms:', error);
  }
}

export const createPlatform = async (platformName) => {
  try {
    const response = await axios.post('http://localhost:3000/platforms', {
      Name: platformName
    });
    return response.data
  } catch (error) {
    console.log(error)
  }
}