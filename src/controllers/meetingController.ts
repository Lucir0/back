import { Request, Response } from 'express';
import meetingService from '../services/meetingService';
import Duo from '../models/Duo';  // Importez le modèle Duo

class MeetingController {
  async submitStartOfYearMeeting(req: Request, res: Response) {
    try {
      const { duoId, ...data } = req.body;
      const meeting = await meetingService.createStartOfYearMeeting(data);

      // Mettre à jour le duo pour indiquer que la réunion de début d'année a été remplie
      await Duo.update({ trialPeriodMeeting: true }, { where: { idDuo: duoId } });

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
      const { duoId, ...data } = req.body;
      const meeting = await meetingService.createMidTermMeeting(data);

      // Mettre à jour le duo pour indiquer que la réunion de mi-parcours a été remplie
      await Duo.update({ midTermMeeting: true }, { where: { idDuo: duoId } });

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
      const { duoId, ...data } = req.body;
      const meeting = await meetingService.createEndOfYearMeeting(data);

      // Mettre à jour le duo pour indiquer que la réunion de fin d'année a été remplie
      await Duo.update({ yearEndMeeting: true }, { where: { idDuo: duoId } });

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
