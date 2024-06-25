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

export default {
  findByEmail,
  findById,
  findAll,
};
