import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (studentData: TStudent, password: string) => {
  // create a user student
  const userData: Partial<TUser> = {};
  // if password is not given, use default password
  // short
  userData.password = password || (config.default_password as string);
  //   if (!password) {
  //     user.password = config.default_password as string; //^ short
  //   } else {
  //     user.password = password;
  //   }

  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error('User already exists!');
  //   }

  // set student role
  userData.role = 'student';

  const generateStudentId = (payload: TAcademicSemester) => {};
  // set manually generated id
  userData.id = generateStudentId();

  // create a user model

  const newUser = await User.create(userData); // build in static method

  // const student = new Student(studentData); // instance method (duplicate)

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  // const newUser = await student.save();

  // create a student
  if (Object.keys(newUser).length) {
    //set id, _id as user
    studentData.id = newUser.id; // embedding id
    studentData.user = newUser._id; //reference _id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  //   return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
