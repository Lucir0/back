import Entreprise from "../models/IEntreprise";
import duoService from "../services/duoService";

const findAll = async () => {
    try {
        return await Entreprise.findAll();
    } catch (error) {
        throw error;
    }
}

const create = async (entreprise: Entreprise) => {
    try {
        if (entreprise) {
            await duoService.createDuoIfNecessary(entreprise);
        }
        return await Entreprise.create(entreprise);
        
    } catch (error) {
        throw error;
    }
}

const update = async (entreprise: Entreprise, id :any) => {
    console.log("entrepriseRepository.update", entreprise);
    try {
        return await Entreprise.update(entreprise, {
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    try {
        return await Entreprise.findByPk(id);
    } catch (error) {
        throw error;
    }
}

const deleteEntreprise = async (id: number) => {
    const entreprise = await findById(id);
    try {
        if (entreprise) {
            await entreprise.destroy();
        }
        return entreprise;
    } catch (error) {
        throw error;
    }
}

export default {
    findAll,
    create,
    update,
    findById,
    deleteEntreprise
};