import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface IMidTermMeeting {
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
  reactivityRating: number;
  perseveranceRating: number;
  proactivityRating: number;
  projectsForSecondSemester: string;
  improvementAxes: string;
  strengths: string;
  thesisSubject?: string;
  recruitmentPlans: boolean;
  creationDate?: Date;
}

interface IMidTermMeetingCreationAttributes extends Optional<IMidTermMeeting, 'id'> {}

class MidTermMeeting extends Model<IMidTermMeeting, IMidTermMeetingCreationAttributes> implements IMidTermMeeting {
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
  public reactivityRating!: number;
  public perseveranceRating!: number;
  public proactivityRating!: number;
  public projectsForSecondSemester!: string;
  public improvementAxes!: string;
  public strengths!: string;
  public thesisSubject?: string;
  public recruitmentPlans!: boolean;
  public creationDate!: Date;
}

MidTermMeeting.init({
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
  reactivityRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  perseveranceRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proactivityRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  projectsForSecondSemester: {
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
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  tableName: 'mid_term_meetings',
  hooks: {
    beforeCreate: (meeting: MidTermMeeting) => {
      meeting.creationDate = new Date();
    },
  },
});

export default MidTermMeeting;
