import axios from "./axios.js";

const API_URL = import.meta.env.VITE_API_URL;

export const createPeriod = async (period) => {
  let output = null;
  const result = await axios.post(`${API_URL}/period`, period).catch((err) => {
    output = err.response.data;
  });

  if (output) {
    return output;
  }
  return result.data; 
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
  let output = null;
  const result = await axios.put(`${API_URL}/period/${id}`, period).catch((err) =>{
    output = err.response.data;
  });

  if(output){
    return output;
  }
  return result.data;
};

export const deletePeriod = async (id) => {
  const result = await axios.delete(`${API_URL}/period/${id}`).catch(() => {
    return false;
  });

  if (result) {
    return true;
  }

};