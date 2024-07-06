import { Router, Request, Response } from 'express';
import meetingController from '../controllers/meetingController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/duos/:duoId/startOfYearMeeting', authMiddleware, (req: Request, res: Response) => meetingController.submitStartOfYearMeeting(req, res));
router.post('/duos/:duoId/midTermMeeting', authMiddleware, (req: Request, res: Response) => meetingController.submitMidTermMeeting(req, res));
router.post('/duos/:duoId/endOfYearMeeting', authMiddleware, (req: Request, res: Response) => meetingController.submitEndOfYearMeeting(req, res));

export default router;
