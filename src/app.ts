import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import duoRoutes from './routes/duoRoutes';  // Ajout des routes duo
import sequelize from './config/database';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3001', 
    methods: ['GET', 'POST' , 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/duos', duoRoutes);  // Utilisation des routes duo à /api/duos

const PORT = process.env.PORT || 3000;

// alter: true permet de mettre à jour la base de données en fonction des changements dans les modèles
sequelize.sync({ }).then(() => {
  console.log('Database synchronized!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
