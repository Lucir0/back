import { Request, Response } from 'express';
import userRepository from '../repositories/userRepository';

class UserService {
  static async getUserByEmail(email: string) {
    return await userRepository.findByEmail(email);
  }

  static async getUserById(id: number) {
    return await userRepository.findById(id);
  }

  static async getAllUsers(req: Request, res: Response) {
    const users = await userRepository.findAll();
    return res.status(200).json(users);
  }

  static async deleteUser(id: number) {
    const user = await userRepository.findById(id);
    if (!user) {
      return null;
    }
    return await userRepository.deleteUser(id);
  }

  static async findDuosWithUserId(id: number) {
    return await userRepository.findDuosWithUserId(id);
  }

  static async updatePassword(id: number, password: string, oldPassword : string) {
    if (!id) {
      return null;
    }
    return await userRepository.updatePassword(id, password, oldPassword);
  }

  static async getAllAlternantsandTuteur() {
    return await userRepository.getAllAlternantsandTuteur();
  }

}

export default UserService;
