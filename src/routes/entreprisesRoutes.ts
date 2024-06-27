import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import entreprisesController from "../controllers/entreprisesController";

const router = Router();

router.get("/", authMiddleware,  (req, res) => entreprisesController.getAllEntreprises(req, res)); 

export default router;