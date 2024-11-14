import api from './api';

export const getItemById = async (id: string) => {
  try {
    const response = await api.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error ${id}:`, error);
    throw error;
  }
};
