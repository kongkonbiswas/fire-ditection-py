import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

// const createStudent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) can define by RequestHandler
const createStudent = catchAsync(async (req, res) => {
  // try {
  const { password, student: studentData } = req.body;
  // creating a schema validation using Zod
  //   const zodParsedData = studentValidationSchema.parse(studentData);
  // creating a schema validation using Joi
  // const { student: studentData } = req.body;
  // data validation using joi
  // const { error, value } = studentValidationSchema.validate(studentData);

  // will call service function to send this data
  const result = await UserServices.createStudentIntoDB(studentData, password);

  // console.log({ error }, { value });

  // if (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: 'Something went wrong. Please try again.',
  //     error: error.details,
  //   });
  // }

  //send response
  // res.status(200).json({
  //   success: true,
  //   message: 'Student created successfully',
  //   data: result,
  // });
  sendResponse(res, {
    // 2nd phase of send response using httpStatus
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
  // } catch (err) {
  //   // res.status(500).json({
  //   //   success: false,
  //   //   message: err.message || 'Something went wrong. Please try again.',
  //   //   error: err,
  //   // });
  //   next(err); // same process as student.controller
  // }
});

export const UserControllers = {
  createStudent,
};
