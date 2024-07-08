import userService from './userService';
import duoService from './duoService';
import meetingService from './meetingService';

class ExportService {
  async getExportData() {
    const users = await userService.getAllAlternants();
    const exportData = [];

    for (const user of users) {
      const duos = await duoService.getDuosByUserId(user.id);
      const meetings = await meetingService.getMeetingsByUserId(user.id.toString());

      for (const duo of duos) {
        const tutor = await userService.getUserById(duo.idTuteur);
        
        const startOfYearMeeting = meetings.startOfYear;
        const midTermMeeting = meetings.midTerm;
        const endOfYearMeeting = meetings.endOfYear;

        exportData.push({
          timestamp: new Date().toISOString(),
          studentId: user.id,
          studentFormation: user.tag.join(', '), // Assuming tags are stored as an array
          lastName: user.lastname,
          firstName: user.name,
          companyName: duo.enterpriseName || 'N/A',
          tutorLastName: tutor?.lastname || 'N/A',
          tutorFirstName: tutor?.name || 'N/A',
          studentPosition: startOfYearMeeting?.tutorPosition || midTermMeeting?.tutorPosition || endOfYearMeeting?.tutorPosition || 'N/A',
          studentMissions: startOfYearMeeting?.studentMissions || midTermMeeting?.studentMissions || endOfYearMeeting?.studentMissions || 'N/A',
          masterThesisSubject: endOfYearMeeting?.thesisSubject || 'N/A',
          enterpriseAlert: (startOfYearMeeting && 'continuationOfStudies' in startOfYearMeeting && startOfYearMeeting.continuationOfStudies) || 
                           (midTermMeeting && 'continuationOfStudies' in midTermMeeting && midTermMeeting.continuationOfStudies) || 
                           (endOfYearMeeting && endOfYearMeeting.continuationOfStudies) ? 'Yes' : 'No',
          pedagogicalAlert: (startOfYearMeeting && 'continuationOfStudies' in startOfYearMeeting && startOfYearMeeting.continuationOfStudies) || 
                            (midTermMeeting && 'continuationOfStudies' in midTermMeeting && midTermMeeting.continuationOfStudies) || 
                            (endOfYearMeeting && endOfYearMeeting.continuationOfStudies) ? 'Yes' : 'No',
          recruitmentProjects: (startOfYearMeeting && 'recruitmentPlans' in startOfYearMeeting && startOfYearMeeting.recruitmentPlans) || 
                               (midTermMeeting && 'recruitmentPlans' in midTermMeeting && midTermMeeting.recruitmentPlans) || 
                               (endOfYearMeeting && endOfYearMeeting.recruitmentPlans) ? 'Yes' : 'No',
          furtherStudiesProject: endOfYearMeeting?.continuationOfStudies ? 'Yes' : 'No',
          followUpComment: endOfYearMeeting?.followUpComment || 'N/A',
          schoolFollowerName: user.tag.join(', '), // Assuming tags are stored as an array
          followUpDate: endOfYearMeeting?.meetingDate || 'N/A',
          followUpFormat: endOfYearMeeting?.followUpFormat || 'N/A',
          studentPresent: 'Yes', // Assume 'Yes' if attended, replace with actual logic
        });
      }
    }
    return exportData;
  }
}

export default new ExportService();
