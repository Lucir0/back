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

  async updateStartOfYearMeeting(id: number, data: any) {
    return await StartOfYearMeeting.update(data, { where: { id } });
  }

  async updateMidTermMeeting(id: number, data: any) {
    return await MidTermMeeting.update(data, { where: { id } });
  }

  async updateEndOfYearMeeting(id: number, data: any) {
    return await EndOfYearMeeting.update(data, { where: { id } });
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

  async getStartOfYearMeetingByStudentId(studentId: string) {
    return await StartOfYearMeeting.findOne({ where: { studentId } });
  }

  async getMidTermMeetingByStudentId(studentId: string) {
    return await MidTermMeeting.findOne({ where: { studentId } });
  }

  async getEndOfYearMeetingByStudentId(studentId: string) {
    return await EndOfYearMeeting.findOne({ where: { studentId } });
  }
}

export default new MeetingRepository();
