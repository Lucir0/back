import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface IEntreprise {
    id: number;
    name: string;
    address: string;
    mail: string;
    phone: string;
    userId: number[];
}

interface EntrepriseCreationAttributes extends Optional<IEntreprise, 'id'> {}

class Entreprise extends Model<IEntreprise, EntrepriseCreationAttributes> implements IEntreprise {
    public id!: number;
    public name!: string;
    public address!: string;
    public mail!: string;
    public phone!: string;
    public userId!: number[];
}

Entreprise.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    }
}, {
    tableName: 'entreprise',
    sequelize,
    timestamps: false, // Explicitly mention this to avoid confusion
});

export default Entreprise;
