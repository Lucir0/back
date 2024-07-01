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

// findAlternantId
const findAlternantId = async (userIds: number[]): Promise<number | undefined> => {
  const alternant = await User.findOne({
      where: {
          id: userIds,
          role: 'Alternant'
      }
  });
  return alternant?.id;
};

const findTuteurId = async (userIds: number[]): Promise<number | undefined> => {
  const tuteur = await User.findOne({
      where: {
          id: userIds,
          role: 'Tuteur' 
      }
  });
  return tuteur?.id;
};

// Repository pour supprimer un utilisateur 
const deleteUser = async (id: number) => {
  const user = await findById(id);
  if (user) {
    user.name = '[Utilisateur Supprimé]';
    user.lastname = '[Utilisateur Supprimé]';
    user.password = '[Utilisateur Supprimé]';
    user.email = '[Utilisateur Supprimé]';
    user.phone = '[Utilisateur Supprimé]';
    user.role = '[Utilisateur Supprimé]';
    user.tag = ['[Utilisateur Supprimé]'];
    await user.save();
    return user;
  }
  return null;
};

export default {
  findByEmail,
  findById,
  findAll,
  create,
  findAlternantId,
  findTuteurId,
  deleteUser, 
};
