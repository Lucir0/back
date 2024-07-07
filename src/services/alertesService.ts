import alertesRepository from "../repositories/alertesRepository";

class AlertesService{

    static async getAllAlertes(){
        return await alertesRepository.getAllAlertes();
    }

}

export default AlertesService;