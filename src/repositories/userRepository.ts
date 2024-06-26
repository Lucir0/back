import { User } from '../models/IUser';

const findByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

const findById = async (id: number) => {
  return await User.findByPk(id);
}
// Route pour récupérer tous les utilisateurs
const findAll = async () => {
  return await User.findAll();
};

// Route pour crée un utilisateur
const create = async (user: any) => {
  return await User.create(user);
};

export default {
  findByEmail,
  findById,
  findAll,
  create,
};
