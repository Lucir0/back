import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";
import entreprisesController from "../controllers/entreprisesController";

const router = Router();

router.get("/", authMiddleware,  (req, res) => entreprisesController.getAllEntreprises(req, res));
// Route pour créer une entreprise
router.post("/", authMiddleware, (req, res) => entreprisesController.createEntreprise(req, res));

router.put("/:id", authMiddleware, (req, res) => entreprisesController.updateEntreprise(req, res));

// route pour récupérer une entreprise par son id
router.get("/:id", authMiddleware, (req, res) => entreprisesController.getEntrepriseById(req, res));

export default router;