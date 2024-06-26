import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import moment from 'moment-timezone';

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  tag: string[]; // Modifier ici pour tableau de string
  creationDate: Date;
  modificationDate: Date;
  lastConnection: Date;
}

interface UserCreationAttributes extends Optional<IUser, 'id'> {}

class User extends Model<IUser, UserCreationAttributes> implements IUser {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public password!: string;
  public email!: string;
  public phone!: string;
  public role!: string;
  public tag!: string[]; 
  public creationDate!: Date;
  public modificationDate!: Date;
  public lastConnection!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [] 
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  modificationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  lastConnection: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
}, {
  sequelize,
  tableName: 'users',
  hooks: {
    beforeCreate: (user: User) => {
      const now = moment().tz('Europe/Paris').toDate();
      user.creationDate = now;
      user.modificationDate = now;
      user.lastConnection = now;
    },
    beforeUpdate: (user: User) => {
      user.modificationDate = moment().tz('Europe/Paris').toDate();
    }
  }
});

export { User };
