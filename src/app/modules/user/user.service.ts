import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
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
  // set manually generated id
  userData.id = '2030100001';

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
