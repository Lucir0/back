// fait comme un service transmet l'information au repository

import entrepriseRepository from "../repositories/entrepriseRepository";


const getEntrepriseById = async (id: number) => {
    return await entrepriseRepository.findById(id);
}

export default {
    getEntrepriseById
};