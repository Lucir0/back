import userRepository from '../repositories/userRepository';
import { Request, Response } from 'express';

const getUserByEmail = async (email: string) => {
  return await userRepository.findByEmail(email);
};

const getUserById = async (id: number) => {
  return await userRepository.findById(id);
}

const getAllUsers = async (req: Request, res: Response) => {
  const users = await userRepository.findAll();
  return res.status(200).json(users);
};

// service pour supprimer un utilisateur
const deleteUser = async (id : number) => {
  const user = await userRepository.findById(id);
  if (!user) {
    return null;
  }
  return await userRepository.deleteUser(id);
};



export default {
  getUserByEmail,
  getUserById,
  getAllUsers,
  deleteUser
};
