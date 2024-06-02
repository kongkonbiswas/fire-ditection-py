import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';
// import { z } from 'zod'
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // creating a schema validation using Zod
    const zodParsedData = studentValidationSchema.parse(studentData);
    // const studentValidationSchema = z.object({
    //   id: z.string(),
    //   name: z.object({
    //     firstName: z.string().max(20, { message: 'First Name can not be more than 20 characters' })
    // })
    // const { student: studentData } = req.body;
    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // will cal service function to send this data
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // console.log({ error }, { value });

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong. Please try again.',
    //     error: error.details,
    //   });
    // }

    //send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students is successfully retrieved',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is found successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
      error: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
