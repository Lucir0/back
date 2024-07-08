import { Router } from 'express';
import { exportUsersToExcel } from '../controllers/exportController';
import authMiddleware from '../middlewares/authMiddleware'; // Importer depuis le bon chemin

const router = Router();

router.get('/export', authMiddleware, exportUsersToExcel);

export default router;
