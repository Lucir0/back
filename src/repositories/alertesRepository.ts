import Alertes from "../models/IAlertes";

class alertesRepository {

    static async getAllAlertes(){
        return await Alertes.findAll();
    }
        
  
}

export default alertesRepository;