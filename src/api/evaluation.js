import axios from "./axios.js";

const API_URL = "http://localhost:3000/api";

export const createEvaluation = async (evaluation) => {
    const result = await axios.post(`${API_URL}/evaluation`, evaluation).catch(() => {
        return false;
    });
    
    if (result) {
        return true;
    }
};

export const getEvaluations = async () => {
    const { data } = await axios.get(`${API_URL}/evaluation`).catch(() => {
        return [];
    });

    return data;
};

export const getEvaluationbyProfessor = async (id) => {
    const { data } = await axios.get(`${API_URL}/evaluation/professor/${id}`).catch(() => {
        return [];
    });

    return data;
}

export const makeEvaluation = async (evaluation) => {
    const result = await axios.post(`${API_URL}/evaluation/make`, evaluation).catch(() => {
        return false;
    });
    
    if (result) {
        return true;
    }
}