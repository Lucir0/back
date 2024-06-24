import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import sequelize from './config/database';
import cors from 'cors'; // Importe le middleware CORS

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Utilisation du middleware CORS
app.use(cors({
    origin: 'http://localhost:3001', // Autorise uniquement les requêtes depuis ce domaine
    methods: ['GET', 'POST'], // Méthodes HTTP autorisées
    allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
  }));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database synchronized!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
