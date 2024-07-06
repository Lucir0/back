import StartOfYearMeeting from '../models/StartOfYearMeeting';
import MidTermMeeting from '../models/MidTermMeeting';
import EndOfYearMeeting from '../models/EndOfYearMeeting';

class MeetingRepository {
  async createStartOfYearMeeting(data: any) {
    return await StartOfYearMeeting.create(data);
  }

  async createMidTermMeeting(data: any) {
    return await MidTermMeeting.create(data);
  }

  async createEndOfYearMeeting(data: any) {
    return await EndOfYearMeeting.create(data);
  }

  async getStartOfYearMeetingById(id: number) {
    return await StartOfYearMeeting.findByPk(id);
  }

  async getMidTermMeetingById(id: number) {
    return await MidTermMeeting.findByPk(id);
  }

  async getEndOfYearMeetingById(id: number) {
    return await EndOfYearMeeting.findByPk(id);
  }
}

export default new MeetingRepository();
