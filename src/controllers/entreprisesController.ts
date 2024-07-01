import { Request, Response } from 'express';
import { CustomRequest } from '../types/CustomRequest';
import entrepriseRepository from '../repositories/entrepriseRepository';
import duoService from '../services/duoService';
import Entreprise from '../models/IEntreprise';
import entrepriseService from '../services/entrepriseService';

const getAllEntreprises = async (req: Request, res: Response) => {
  const entreprises = await entrepriseRepository.findAll();
  // exectuer ça  await entrepriseService.createDuoIfNecessary(entreprise);
  return res.status(200).json(entreprises);
}

// Route pour créer une entreprise
const createEntreprise = async (req: Request, res: Response) => {
  const { name, address, mail, phone,userId } = req.body;
  const entreprise : Entreprise = await entrepriseRepository.create({ name, address, mail, phone, userId } as Entreprise);
  return res.status(201).json(entreprise);
}

const updateEntreprise = async (req: CustomRequest, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    console.log("id", id);

    console.log(req.body);
    const { name, address, mail, phone, userId } = req.body;

    const entreprise = await entrepriseRepository.update({ name, address, mail, phone, userId } as Entreprise, id);

    return res.status(200).json(entreprise);
  } catch (error) {
    console.error("Error updating entreprise:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// route pour récupérer une entreprise par son id
const getEntrepriseById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const entreprise = await entrepriseService.getEntrepriseById(id);
  return res.status(200).json(entreprise);
}

// Route pour supprimer une entreprise
const deleteEntreprise = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try{
    await entrepriseService.deleteEntreprise(id);
    return res.status(204).end();
  } catch (error) {
    console.error("Error deleting entreprise:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export default {
    getAllEntreprises,
    createEntreprise,
    updateEntreprise,
    getEntrepriseById,
    deleteEntreprise
  };