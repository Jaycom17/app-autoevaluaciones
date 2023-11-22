import axios from "./axios.js";

const API_URL = "http://localhost:3000/api";

export const createPeriod = async (period) => {
  const result = await axios.post(`${API_URL}/period`, period).catch(() => {
    return false;
  });

  if (result) {
    return true;
  }
};

export const getPeriods = async () => {
  const { data } = await axios.get(`${API_URL}/period`).catch(() => {
    return [];
  });

  return data;
};