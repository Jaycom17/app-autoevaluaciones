import axios from "./axios.js";

const API_URL = import.meta.env.VITE_API_URL;

export const createEvaluation = async (evaluation) => {
    const result = await axios.post(`${API_URL}/evaluation`, evaluation).catch(() => {
        return false;
    });
    
    return result;
};

export const getEvaluations = async () => {
    const { data } = await axios.get(`${API_URL}/evaluation`).catch(() => {
        return [];
    });

    return data;
};

export const getEvaluationbyProfessor = async (id) => {
    const { data } = await axios.get(`${API_URL}/evaluation/professor/${id}`).catch((err) => {
        return [];
    });

    return data;
}

export const makeEvaluation = async (evaluations) => {
    evaluations.forEach(async (evaluation) => {
        if (evaluation.eva_resultado instanceof FileList) {
            let newName = `${evaluation.eva_id}-${evaluation.eva_resultado[0].name}`;

            const renamedFile = new File([evaluation.eva_resultado[0]], newName, {
                type: evaluation.eva_resultado[0].type,
            });

            const formData = new FormData();
            formData.append("file", renamedFile);

            await sendDocument(formData);

            evaluation.eva_resultado = newName;

        }
        
        await axios.post(`${API_URL}/evaluation/make`, evaluation).catch(() => {});
    });
    
    return true;
}

const sendDocument = async (document) => {
    const result = await axios.post(`${API_URL}/saveDocument`, document).catch((res) => {
        return true;
    });
    
    return result;
}

export const getDocument = async (id) => {
    const { data } = await axios.get(`${API_URL}/saveDocument/${id}`).catch(() => {
        return true;
    });

    return data;
}

export const deleteEvaluation = async (id) => {
    const result = await axios.delete(`${API_URL}/evaluation/${id}`).catch(() => {
        return false;
    });

    return result;
}