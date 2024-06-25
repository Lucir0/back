import userRepository from '../repositories/userRepository';
import { Request, Response } from 'express';
import { CustomRequest } from '../types/CustomRequest';


const getUserByEmail = async (email: string) => {
  return await userRepository.findByEmail(email);
};


const getUserProfile = (req: CustomRequest , res: Response) => {
  const user = req.user; 
  console.log('user', user);

  // Envoie la réponse avec les données de l'utilisateur
  return res.status(200).json({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    role : user?.role,
    // Ajoute d'autres champs d'utilisateur si nécessaire
  });
};

// Route pour récupérer tous les utilisateurs
const getAllUsers = async (req: Request, res: Response) => {
  const users = await userRepository.findAll();
  return res.status(200).json(users);
};

export default {
  getUserByEmail,
  getAllUsers,
  getUserProfile,
};
