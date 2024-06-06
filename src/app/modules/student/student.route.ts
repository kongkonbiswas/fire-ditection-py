import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();
// will call controller function

router.get('/:studentId', StudentController.getSingleStudent);

router.delete('/:studentId', StudentController.deleteStudent);

router.get('/', StudentController.getAllStudents);

export const StudentRoutes = router;
