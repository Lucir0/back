import Entreprise from "../models/IEntreprise";

const findAll = async () => {
    return await Entreprise.findAll();
    }

export default {
    findAll,
};