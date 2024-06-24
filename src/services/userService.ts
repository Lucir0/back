import userRepository from '../repositories/userRepository';

const getUserByEmail = async (email: string) => {
  return await userRepository.findByEmail(email);
};

const getUserById = async (id: number) => {
  return await userRepository.findById(id);
}

export default {
  getUserByEmail,
  getUserById,
};
