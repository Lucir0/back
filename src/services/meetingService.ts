import meetingRepository from '../repositories/meetingRepository';

class MeetingService {
  async createStartOfYearMeeting(data: any) {
    return await meetingRepository.createStartOfYearMeeting(data);
  }

  async createMidTermMeeting(data: any) {
    return await meetingRepository.createMidTermMeeting(data);
  }

  async createEndOfYearMeeting(data: any) {
    return await meetingRepository.createEndOfYearMeeting(data);
  }

  async getStartOfYearMeetingById(id: number) {
    return await meetingRepository.getStartOfYearMeetingById(id);
  }

  async getMidTermMeetingById(id: number) {
    return await meetingRepository.getMidTermMeetingById(id);
  }

  async getEndOfYearMeetingById(id: number) {
    return await meetingRepository.getEndOfYearMeetingById(id);
  }
}

export default new MeetingService();
