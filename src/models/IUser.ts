import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';


export interface IUser {
    id: number;
    name: string;
    lastname: string;
    password: string;
    email: string;
    phone: string;
    role: string;
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
      allowNull: false
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modificationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastConnection: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'users'
  });
  
  export { User };
