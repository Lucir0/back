import entrepriseRepository from "../repositories/entrepriseRepository";

class EntrepriseService {
  static async getEntrepriseById(id: number) {
    return await entrepriseRepository.findById(id);
  }

  static async deleteEntreprise(id: number) {
    return await entrepriseRepository.deleteEntreprise(id);
  }
}

export default EntrepriseService;
