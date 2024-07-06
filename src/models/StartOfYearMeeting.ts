import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface IStartOfYearMeeting {
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
  tutorComment: string;
  punctualityRating: number;
  integrationRating: number;
  organizationRating: number;
  communicationRating: number;
  teamworkRating: number;
  projectsForFirstSemester: string;
  improvementAxes: string;
  creationDate?: Date;
}

interface IStartOfYearMeetingCreationAttributes extends Optional<IStartOfYearMeeting, 'id'> {}

class StartOfYearMeeting extends Model<IStartOfYearMeeting, IStartOfYearMeetingCreationAttributes> implements IStartOfYearMeeting {
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
  public tutorComment!: string;
  public punctualityRating!: number;
  public integrationRating!: number;
  public organizationRating!: number;
  public communicationRating!: number;
  public teamworkRating!: number;
  public projectsForFirstSemester!: string;
  public improvementAxes!: string;
  public creationDate!: Date;
}

StartOfYearMeeting.init({
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
  tutorComment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  punctualityRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  integrationRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  organizationRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  communicationRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teamworkRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  projectsForFirstSemester: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  improvementAxes: {
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
  tableName: 'start_of_year_meetings',
  hooks: {
    beforeCreate: (meeting: StartOfYearMeeting) => {
      meeting.creationDate = new Date();
    },
  },
});

export default StartOfYearMeeting;
