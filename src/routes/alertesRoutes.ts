import { Request, Response, Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import alertesController from "../controllers/alertesConroller";

const router = Router();

router.get('/alertes'), authMiddleware, (req: Request, res : Response) => alertesController.getAllAlertes(req, res); 
export default router;