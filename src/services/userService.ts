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



export default {
  getUserByEmail,
  getUserById,
  getAllUsers,
};
