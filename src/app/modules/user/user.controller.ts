import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    // creating a schema validation using Zod
    //   const zodParsedData = studentValidationSchema.parse(studentData);
    // creating a schema validation using Joi
    // const { student: studentData } = req.body;
    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // will call service function to send this data
    const result = await UserServices.createStudentIntoDB(
      studentData,
      password,
    );

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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong. Please try again.',
      error: err,
    });
  }
};

export const UserControllers = {
  createStudent,
};
