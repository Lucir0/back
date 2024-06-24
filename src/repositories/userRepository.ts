import { User } from '../models/IUser';

const findByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

const findById = async (id: number) => {
  return await User.findByPk(id);
}

export default {
  findByEmail,
  findById,
};
