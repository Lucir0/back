import { Request, Response } from 'express';
import meetingService from '../services/meetingService';

class MeetingController {
  async submitStartOfYearMeeting(req: Request, res: Response) {
    try {
      const data = req.body;
      const meeting = await meetingService.createStartOfYearMeeting(data);
      res.status(201).json(meeting);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async submitMidTermMeeting(req: Request, res: Response) {
    try {
      const data = req.body;
      const meeting = await meetingService.createMidTermMeeting(data);
      res.status(201).json(meeting);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async submitEndOfYearMeeting(req: Request, res: Response) {
    try {
      const data = req.body;
      const meeting = await meetingService.createEndOfYearMeeting(data);
      res.status(201).json(meeting);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}

export default new MeetingController();
