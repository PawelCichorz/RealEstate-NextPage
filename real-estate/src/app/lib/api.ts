import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000';

export const fetchOffers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/offers`);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
    return [];
  }
};

export const loginBackend = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
