import Duo, { IDuo } from '../models/Duo';
import { IEntreprise } from '../models/IEntreprise';
import duoRepository from '../repositories/duoRepository';
import userRepository from '../repositories/userRepository';

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

    async createDuoIfNecessary(entreprise: IEntreprise): Promise<void> {
        const userIdsArray = entreprise.userId;
        console.log("userIdsArray", userIdsArray);
    
        // Boucler sur chaque sous-tableau de userIds
        for (const userIds of userIdsArray as any[]) {
            console.log("userIds", userIds);
    
            // Vérifier s'il y a un id d'alternant et un id de tuteur dans userIds
            const alternantId = await userRepository.findAlternantId(userIds);
            console.log("alternantId", alternantId);
            const tuteurId = await userRepository.findTuteurId(userIds);
            console.log("tuteurId", tuteurId);
    
            if (alternantId && tuteurId) {
                // Trouver l'id du suiveur (par exemple, prenons le premier utilisateur qui n'est ni alternant ni tuteur)
                const suiveurId = userIds.find((id:any) => id !== alternantId && id !== tuteurId);
                console.log("suiveurId", suiveurId);
    
                // Créer le duo avec les ids trouvés
                const duoAttributes: IDuo = {
                    idAlternant: alternantId,
                    idTuteur: tuteurId,
                    idSuiveur: suiveurId || 0, // Mettez une valeur par défaut si aucun suiveur n'est trouvé
                    enterpriseName: entreprise.name,
                    isEnterpriseRecruit: false, // À définir selon votre logique
                    trialPeriodMeeting: false,
                    midTermMeeting: false,
                    yearEndMeeting: false,
                    creationDate: new Date()
                };
                console.log("duoAttributes", duoAttributes);
    
                // Appeler la méthode pour créer le duo
                await this.createDuo(duoAttributes);
                console.log("Duo créé avec succès");
            } else {
                console.log("Alternant ou Tuteur non trouvé pour userIds:", userIds);
            }
        }
    }
    
}

export default new DuoService();
