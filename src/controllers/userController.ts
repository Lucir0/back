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

// Route pour crée un utilisateur
const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const existingUser = await userRepository.findByEmail(user.email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const newUser = await userRepository.create(user);
  return res.status(201).json(newUser);
};

// Route pour modifier un utilisateur
const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = req.body;
  const existingUser = await userRepository.findById(id);
  if (!existingUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  await existingUser.update(user);
  return res.status(200).json(existingUser);
};

export default {
  getUserByEmail,
  getAllUsers,
  getUserProfile,
  createUser,
  updateUser,
};
