import api from "./api";

export const getItems = async (query: string) => {
  try {
    const response = await api.get(`/items?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
