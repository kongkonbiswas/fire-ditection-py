import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  // try {
  const result = await StudentServices.getAllStudentsFromDB();

  // res.status(200).json({
  //   success: true,
  //   message: 'Students is retrieved successfully.',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students is retrieved successfully.',
    data: result,
  });
  // } catch (err) {
  // res.status(500).json({
  //   success: false,
  //   message: err.message || 'Something went wrong. Please try again.',
  //   error: err,
  // });
  // next(err); // commented line work just using next() which applying the below error also and for using this function you don't need to declare the err type example (err: any)
  // }
});

const getSingleStudent = catchAsync(async (req, res) => {
  // try {
  const { studentId } = req.params;

  const result = await StudentServices.getSingleStudentFromDB(studentId);

  // res.status(200).json({
  //   success: true,
  //   message: 'Student is found successfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student found successfully.',
    data: result,
  });
  // } catch (err) {
  // res.status(500).json({
  //   success: false,
  //   message: err.message || 'Something went wrong. Please try again.',
  //   error: err,
  // });
  // next(err);
  // }
});

const deleteStudent = catchAsync(async (req, res) => {
  // try {
  const { studentId } = req.params;

  const result = await StudentServices.deleteStudentFromDB(studentId);

  // res.status(200).json({
  //   success: true,
  //   message: 'Student is deleted successfully',
  //   data: result,
  // });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
  // } catch (err) {
  //   // res.status(500).json({
  //   //   success: false,
  //   //   message: err.message || 'Something went wrong. Please try again.',
  //   //   error: err,
  //   // })
  //   next(err);
  // }
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
