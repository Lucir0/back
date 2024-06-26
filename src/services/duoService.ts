import duoRepository from '../repositories/duoRepository';

class DuoService {
    async createDuo(data: any) {
        return await duoRepository.createDuo(data);
    }

    async getAllDuos() {
        return await duoRepository.getAllDuos();
    }

    async getDuoById(id: number) {
        return await duoRepository.getDuoById(id);
    }

    async updateDuo(id: number, data: any) {
        return await duoRepository.updateDuo(id, data);
    }

    async deleteDuo(id: number) {
        return await duoRepository.deleteDuo(id);
    }
}

export default new DuoService();
