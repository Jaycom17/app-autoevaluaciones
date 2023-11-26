import axios from "./axios.js";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (user) => {
  const { data } = await axios.post(`${API_URL}/user/login`, user);
  return data;
};

export const profile = async () => {
  const { data } = await axios.get(`${API_URL}/user/profile`);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post(`${API_URL}/user/logout`);
  return data;
};

export const getProfessors = async () => {
  const { data } = await axios.get(`${API_URL}/user/professors`);
  return data;
}
