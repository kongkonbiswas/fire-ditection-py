export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean; //in ph its needsPasswordChange
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'progress';
  isDeleted: boolean;
};
