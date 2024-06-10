/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

//parsers

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // global error handler
  const statusCode = 500;
  const message = err.message || 'Something went wrong!';
  return res.status(statusCode).json({ success: false, message, error: err });
});

// console.log(process.cwd());

export default app;
