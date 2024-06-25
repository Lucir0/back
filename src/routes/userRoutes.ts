import { Router, Request, Response } from 'express';
import userController from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';
import { CustomRequest } from '../types/CustomRequest';


const router = Router();

router.get('/', authMiddleware, (req: CustomRequest, res: Response) => userController.getUserProfile(req, res)); 
// Route pour récupérer tous les utilisateurs
router.get('/users', authMiddleware, (req: CustomRequest, res: Response) => userController.getAllUsers(req, res));

export default router;
