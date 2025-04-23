import axios from 'axios';

const BASE_URL = '/api/profile';

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, profileData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
