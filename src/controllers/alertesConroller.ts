import { Request, Response } from "express";
import AlertesService from "../services/alertesService";

class alertesController {
    static async getAllAlertes(req : Request, res: Response) {
        const alertes = await AlertesService.getAllAlertes();
        res.status(200).json(alertes);
    }

}

export default alertesController;