import axios from "./axios.js";

const API_URL = import.meta.env.VITE_API_URL;

export const getAverageScoreByLabor = async () => {
    const { data } = await axios.get(`${API_URL}/stats/avgScrPrLbr`).catch(() => {
        return [];
    });

    return data;
};

export const getAverageScoreByPeriod = async () => {
    const { data } = await axios.get(`${API_URL}/stats/avgScrPrPrd`).catch(() => {
        return [];
    });

    return data;
}

export const getNumberOfEvaluationsByLaborType = async () => {
    const { data } = await axios.get(`${API_URL}/stats/evalCntPrLbrTp`).catch(() => {
        return [];
    });

    return data;
}

export const getAverageScoreByLaborAndLaborType = async () => {
    const { data } = await axios.get(`${API_URL}/stats/avgScrPrLbrTpPrd`).catch(() => {
        return [];
    });

    return data;
}