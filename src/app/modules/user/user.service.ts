import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (payload: TStudent, password: string) => {
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

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

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
    payload.id = newUser.id; // embedding id
    payload.user = newUser._id; //reference _id
    const newStudent = await Student.create(payload);
    return newStudent;
  }
  //   return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
