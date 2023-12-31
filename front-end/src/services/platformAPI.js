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

export const updatePlatform = async (platformName, platformId) => {
  try {
    const response = await axios.patch(`http://localhost:3000/platforms/${platformId}`, {
      Name: platformName
    });
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deletePlatform = async (platformId) => {
  try {
    await axios.delete(`http://localhost:3000/platforms/${platformId}`);
  } catch (error) {
    console.log(error)
  }
}