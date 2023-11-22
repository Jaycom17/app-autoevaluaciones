import axios from "./axios.js";

const API_URL = "http://localhost:3000/api";

export const createLabor = async (labor) => {
  const result = await axios.post(`${API_URL}/labor`, labor).catch(() => {
    return false;
  });

  if (result) {
    return true;
  }
};

export const getLaborById = async (id) => {
  const { data } = await axios.get(`${API_URL}/labor/${id}`);
  return data;
};

export const getLabors = async () => {
  const { data } = await axios.get(`${API_URL}/labor`);
  return data;
};

export const updateLabor = async (id, labor) => {
  const result = await axios.put(`${API_URL}/labor/${id}`, labor).catch(() =>{
    return false;
  });

  if(result){
    return true;
  }
} 

export const deleteLabor = async (id) => {
  const result = await axios.delete(`${API_URL}/labor/${id}`).catch(() => {
    return false;
  });

  if (result) {
    return true;
  }
};
