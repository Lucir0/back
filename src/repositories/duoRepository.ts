import Duo from '../models/Duo';

class DuoRepository {
    async createDuo(data: any) {
        return await Duo.create(data);
    }

    async getAllDuos() {
        return await Duo.findAll();
    }

    async getDuoById(id: number) {
        return await Duo.findByPk(id);
    }

    async updateDuo(id: number, data: any) {
        const duo = await Duo.findByPk(id);
        if (duo) {
            return await duo.update(data);
        }
        return null;
    }

    async deleteDuo(id: number) {
        const duo = await Duo.findByPk(id);
        if (duo) {
            return await duo.destroy();
        }
        return null;
    }

    async getDuoWithSuiveurIdAndTrialPeriodMeetingFalse(id: number) {
        return await Duo.findAll({
            where: {
                idSuiveur: id,
                trialPeriodMeeting: false
            }
        });
    }

    async getDuoWithSuiveurIdAndMidTermMeetingFalse(id: number) {
        return await Duo.findAll({
            where: {
                idSuiveur: id,
                midTermMeeting: false
            }
        });
    }

    async getDuoWithSuiveurIdAndYearEndMeetingFalse(id: number) {
        return await Duo.findAll({
            where: {
                idSuiveur: id,
                yearEndMeeting: false
            }
        });
    }
    
}

export default new DuoRepository();
