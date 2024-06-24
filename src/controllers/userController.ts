import userRepository from '../repositories/userRepository';
import { Request, Response } from 'express';
import { User } from '../models/IUser';

const getUserByEmail = async (email: string) => {
  return await userRepository.findByEmail(email);
};

const getUserProfile = (req: Request, res: Response) => {
  const user = req.body as any; // Récupère l'utilisateur à partir du middleware d'authentification

  // Envoie la réponse avec les données de l'utilisateur
  return res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
    // Ajoute d'autres champs d'utilisateur si nécessaire
  });
};

export default {
  getUserByEmail,
  getUserProfile,
};
