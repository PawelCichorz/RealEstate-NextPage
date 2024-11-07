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

export const submitOffer = async (data: Record<string, any>) => {
  const formDataToSend = new FormData();

  for (const key in data) {
    if (data[key] instanceof FileList) {
      Array.from(data[key]).forEach((file) => {
        formDataToSend.append(key, file);
      });
    } else {
      formDataToSend.append(key, data[key]);
    }
  }

  try {
    const response = await fetch('/api/addoffers', {
      method: 'POST',
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error('Failed to submit offer');
    }

    return await response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error submitting offer: ${err.message}`);
    } else {
      throw new Error('Unknown error occurred during submission');
    }
  }
};
