import { Request, Response } from 'express';
import { CustomRequest } from '../types/CustomRequest';
import entrepriseRepository from '../repositories/entrepriseRepository';
import duoService from '../services/duoService';

const getAllEntreprises = async (req: Request, res: Response) => {
  const entreprises = await entrepriseRepository.findAll();
  // exectuer ça  await entrepriseService.createDuoIfNecessary(entreprise);
  await duoService.createDuoIfNecessary(entreprises[0]);
  return res.status(200).json(entreprises);
}

export default {
    getAllEntreprises,
    };