import meetingRepository from "../repositories/meetingRepository";
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

  async updateStartOfYearMeeting(id: number, data: any) {
    await meetingRepository.updateStartOfYearMeeting(id, data);
    return await meetingRepository.getStartOfYearMeetingById(id);
  }

  async updateMidTermMeeting(id: number, data: any) {
    await meetingRepository.updateMidTermMeeting(id, data);
    return await meetingRepository.getMidTermMeetingById(id);
  }

  async updateEndOfYearMeeting(id: number, data: any) {
    await meetingRepository.updateEndOfYearMeeting(id, data);
    return await meetingRepository.getEndOfYearMeetingById(id);
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

  async getStartOfYearMeetingByStudentId(studentId: string) {
    return await meetingRepository.getStartOfYearMeetingByStudentId(studentId);
  }

  async getMidTermMeetingByStudentId(studentId: string) {
    return await meetingRepository.getMidTermMeetingByStudentId(studentId);
  }

  async getEndOfYearMeetingByStudentId(studentId: string) {
    return await meetingRepository.getEndOfYearMeetingByStudentId(studentId);
  }
}

export default new MeetingService();
