import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface IEndOfYearMeeting {
  id?: number;
  studentId: string;
  studentName: string;
  studentFirstName: string;
  enterpriseName: string;
  tutorName: string;
  tutorFirstName: string;
  tutorPosition: string;
  studentMissions: string;
  meetingDate: string;
  followUpFormat: 'Présentiel' | 'Distanciel';
  projectsForNextYear: string;
  improvementAxes: string;
  strengths: string;
  thesisSubject?: string;
  recruitmentPlans: boolean;
  continuationOfStudies: boolean;
  followUpComment: string;
  creationDate?: Date;
}

interface IEndOfYearMeetingCreationAttributes extends Optional<IEndOfYearMeeting, 'id'> {}

class EndOfYearMeeting extends Model<IEndOfYearMeeting, IEndOfYearMeetingCreationAttributes> implements IEndOfYearMeeting {
  public id!: number;
  public studentId!: string;
  public studentName!: string;
  public studentFirstName!: string;
  public enterpriseName!: string;
  public tutorName!: string;
  public tutorFirstName!: string;
  public tutorPosition!: string;
  public studentMissions!: string;
  public meetingDate!: string;
  public followUpFormat!: 'Présentiel' | 'Distanciel';
  public projectsForNextYear!: string;
  public improvementAxes!: string;
  public strengths!: string;
  public thesisSubject?: string;
  public recruitmentPlans!: boolean;
  public continuationOfStudies!: boolean;
  public followUpComment!: string;
  public creationDate!: Date;
}

EndOfYearMeeting.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  studentId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enterpriseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tutorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tutorFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tutorPosition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  studentMissions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  meetingDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  followUpFormat: {
    type: DataTypes.ENUM('Présentiel', 'Distanciel'),
    allowNull: false,
  },
  projectsForNextYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  improvementAxes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strengths: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thesisSubject: {
    type: DataTypes.STRING,
  },
  recruitmentPlans: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  continuationOfStudies: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  followUpComment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  tableName: 'end_of_year_meetings',
  hooks: {
    beforeCreate: (meeting: EndOfYearMeeting) => {
      meeting.creationDate = new Date();
    },
  },
});

export default EndOfYearMeeting;
