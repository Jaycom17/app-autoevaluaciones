import axios from "./axios.js";

const API_URL = import.meta.env.VITE_API_URL;

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

export const getPeriodById = async (id) => {
  const { data } = await axios.get(`${API_URL}/period/${id}`);
  return data;
};


export const updatePeriod = async (id, period) => {
  const result = await axios.put(`${API_URL}/period/${id}`, period).catch(() =>{
    return false;
  });

  if(result){
    return true;
  }
} 

export const deletePeriod = async (id) => {
  const result = await axios.delete(`${API_URL}/period/${id}`).catch(() => {
    return false;
  });

  if (result) {
    return true;
  }

};