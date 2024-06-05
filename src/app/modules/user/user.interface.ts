export type TUser = {
  id: string;
  password: string;
  updatePassword: boolean; //in ph its needsPasswordChange
  role: 'admin' | 'student' | 'faculty';
  isDeleted: boolean;
};
