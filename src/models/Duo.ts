import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface IDuoAttributes {
    idDuo?: number;
    idAlternant: number;
    idTuteur: number;
    idSuiveur: number;
    enterpriseName: string;
    isEnterpriseRecruit: boolean;
    trialPeriodMeeting: boolean;
    midTermMeeting: boolean;
    yearEndMeeting: boolean;
    creationDate?: Date;
}

interface IDuoCreationAttributes extends Optional<IDuoAttributes, 'idDuo'> {}

class Duo extends Model<IDuoAttributes, IDuoCreationAttributes> implements IDuoAttributes {
    public idDuo!: number;
    public idAlternant!: number;
    public idTuteur!: number;
    public idSuiveur!: number;
    public enterpriseName!: string;
    public isEnterpriseRecruit!: boolean;
    public trialPeriodMeeting!: boolean;
    public midTermMeeting!: boolean;
    public yearEndMeeting!: boolean;
    public creationDate!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Duo.init({
    idDuo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idAlternant: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idTuteur: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idSuiveur: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    enterpriseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isEnterpriseRecruit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    trialPeriodMeeting: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    midTermMeeting: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    yearEndMeeting: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    creationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: 'duos',
});

export default Duo;
