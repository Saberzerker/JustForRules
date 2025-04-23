import axios from 'axios';

const BASE_URL = '/api/exercises';

export const logExercise = async (exerciseData) => {
  try {
    const response = await axios.post(BASE_URL, exerciseData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getAllExercises = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
