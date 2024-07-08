import alertesRepository from '../repositories/alertesRepository';

class AlertesService {
  async getAllAlertes() {
    return await alertesRepository.getAllAlertes();
  }

  async getAlertesByUserId(userId: number) {
    return await alertesRepository.getAlertesByUserId(userId);
  }
}

export default new AlertesService();
