import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRoute from './routes/reservationroute.js';



dotenv.config({ path: './config/config.env' });
const app = express();
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRoute);

dbConnection();

app.use(errorMiddleware);
export default app;