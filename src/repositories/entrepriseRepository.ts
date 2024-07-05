import Entreprise from "../models/IEntreprise";
import duoService from "../services/duoService";

class EntrepriseRepository {
  static async findAll() {
    try {
      return await Entreprise.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async create(entreprise: Entreprise) {
    try {
      if (entreprise) {
        await duoService.createOrUpdateDuoIfNecessary(entreprise);
      }
      return await Entreprise.create(entreprise);
    } catch (error) {
      throw error;
    }
  }

  static async update(entreprise: Entreprise, id: any) {
    console.log("entrepriseRepository.update", entreprise);
    try {
      if (entreprise) {
        await duoService.createOrUpdateDuoIfNecessary(entreprise);
      }
      return await Entreprise.update(entreprise, {
        where: {
          id: id
        }
      });
    } catch (error) {
      throw error;
    }
  }

  static async findById(id: number) {
    try {
      return await Entreprise.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async deleteEntreprise(id: number) {
    const entreprise = await this.findById(id);
    try {
      if (entreprise) {
        await entreprise.destroy();
      }
      return entreprise;
    } catch (error) {
      throw error;
    }
  }
}

export default EntrepriseRepository;
