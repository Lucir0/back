// fait comme un service transmet l'information au repository

import entrepriseRepository from "../repositories/entrepriseRepository";


const getEntrepriseById = async (id: number) => {
    return await entrepriseRepository.findById(id);
}

const deleteEntreprise = async (id: number) => {
    return await entrepriseRepository.deleteEntreprise(id);
}

export default {
    getEntrepriseById,
    deleteEntreprise,
};