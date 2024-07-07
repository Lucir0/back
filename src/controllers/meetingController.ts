import { Request, Response } from 'express';
import meetingService from '../services/meetingService';
import Duo from '../models/Duo';

class MeetingController {
  async submitStartOfYearMeeting(req: Request, res: Response) {
    try {
      const { studentId, duoId, ...data } = req.body;

      let meeting = await meetingService.getStartOfYearMeetingByStudentId(studentId);
      if (meeting) {
        meeting = await meetingService.updateStartOfYearMeeting(meeting.id, data);
      } else {
        meeting = await meetingService.createStartOfYearMeeting({ ...data, duoId, studentId });
        await Duo.update({ trialPeriodMeeting: true }, { where: { idDuo: duoId } });
      }

      res.status(201).json(meeting);
    } catch (error) {
      console.error('Error in submitStartOfYearMeeting:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async submitMidTermMeeting(req: Request, res: Response) {
    try {
      const { studentId, duoId, ...data } = req.body;

      let meeting = await meetingService.getMidTermMeetingByStudentId(studentId);
      if (meeting) {
        meeting = await meetingService.updateMidTermMeeting(meeting.id, data);
      } else {
        meeting = await meetingService.createMidTermMeeting({ ...data, duoId, studentId });
        await Duo.update({ midTermMeeting: true }, { where: { idDuo: duoId } });
      }

      res.status(201).json(meeting);
    } catch (error) {
      console.error('Error in submitMidTermMeeting:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async submitEndOfYearMeeting(req: Request, res: Response) {
    try {
      const { studentId, duoId, ...data } = req.body;

      let meeting = await meetingService.getEndOfYearMeetingByStudentId(studentId);
      if (meeting) {
        meeting = await meetingService.updateEndOfYearMeeting(meeting.id, data);
      } else {
        meeting = await meetingService.createEndOfYearMeeting({ ...data, duoId, studentId });
        await Duo.update({ yearEndMeeting: true }, { where: { idDuo: duoId } });
      }

      res.status(201).json(meeting);
    } catch (error) {
      console.error('Error in submitEndOfYearMeeting:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async getStartOfYearMeeting(req: Request, res: Response) {
    try {
      const { studentId } = req.params;
      console.log('Fetching start of year meeting for studentId:', studentId);
      const meeting = await meetingService.getStartOfYearMeetingByStudentId(studentId);
      if (meeting) {
        res.status(200).json(meeting);
      } else {
        res.status(404).json({ error: 'Meeting not found' });
      }
    } catch (error) {
      console.error('Error in getStartOfYearMeeting:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async getMidTermMeeting(req: Request, res: Response) {
    try {
      const { studentId } = req.params;
      console.log('Fetching mid term meeting for studentId:', studentId);
      const meeting = await meetingService.getMidTermMeetingByStudentId(studentId);
      if (meeting) {
        res.status(200).json(meeting);
      } else {
        res.status(404).json({ error: 'Meeting not found' });
      }
    } catch (error) {
      console.error('Error in getMidTermMeeting:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async getEndOfYearMeeting(req: Request, res: Response) {
    try {
      const { studentId } = req.params;
      console.log('Fetching end of year meeting for studentId:', studentId);
      const meeting = await meetingService.getEndOfYearMeetingByStudentId(studentId);
      if (meeting) {
        res.status(200).json(meeting);
      } else {
        res.status(404).json({ error: 'Meeting not found' });
      }
    } catch (error) {
      console.error('Error in getEndOfYearMeeting:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}

export default new MeetingController();
