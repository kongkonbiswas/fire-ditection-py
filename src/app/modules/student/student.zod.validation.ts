import { z } from 'zod';

// Define the UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'Name cannot be more than 20 characters' })
    .regex(/^[A-Z][a-zA-Z]*$/, {
      message: 'First Name must start with a capital letter',
    })
    .nonempty({ message: 'First Name is required' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .regex(/^[a-zA-Z]*$/, { message: 'Last Name is not valid' })
    .nonempty({ message: 'Last Name is required' }),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father's Name is required" }),
  fatherOccupation: z
    .string()
    .nonempty({ message: "Father's Occupation is required" }),
  fatherContactNo: z
    .string()
    .nonempty({ message: "Father's Contact Number is required" }),
  motherName: z.string().nonempty({ message: "Mother's Name is required" }),
  motherOccupation: z
    .string()
    .nonempty({ message: "Mother's Occupation is required" }),
  motherContactNo: z
    .string()
    .nonempty({ message: "Mother's Contact Number is required" }),
});

// Define the LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty({ message: "Local Guardian's Name is required" }),
  occupation: z
    .string()
    .nonempty({ message: "Local Guardian's Occupation is required" }),
  contactNo: z
    .string()
    .nonempty({ message: "Local Guardian's Contact Number is required" }),
  address: z
    .string()
    .nonempty({ message: "Local Guardian's Address is required" }),
});

// Define the Student schema
export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z
        .enum(['male', 'female', 'other'], {
          invalid_type_error: 'Gender is required',
          required_error: 'Gender is required',
        })
        .refine((val) => ['male', 'female', 'other'].includes(val), {
          message:
            "{#value} is not valid. The gender of the student can be either 'Male', 'Female', or 'Other'.",
        }),
      dateOfBirth: z.date().optional(),
      email: z
        .string()
        .email({ message: '{#value} is not a valid email' })
        .nonempty({ message: 'Email is required' }),
      contactNo: z.string().nonempty({ message: 'Contact Number is required' }),
      emergencyContactNo: z
        .string()
        .nonempty({ message: 'Emergency Contact Number is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .nonempty({ message: 'Present Address is required' }),
      permanentAddress: z
        .string()
        .nonempty({ message: 'Permanent Address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImag: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
