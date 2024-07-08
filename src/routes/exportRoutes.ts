import { Router, Request, Response } from 'express';
import { exportUsersToExcel } from '../controllers/exportController';
import authMiddleware from '../middlewares/authMiddleware'; 

const router = Router();

router.get('/export', authMiddleware,  (req: Request, res: Response) => exportUsersToExcel(req, res));

export default router;
