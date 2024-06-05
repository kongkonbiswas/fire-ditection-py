// creating a schema validation using joi

import Joi from 'joi';

// Define the UserName schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .pattern(/^[A-Z][a-zA-Z]*$/, 'capitalize')
    .messages({
      'string.empty': 'First Name is required',
      'string.max': 'Name cannot be more than 20 characters',
      'string.pattern.name': '{#label} must start with a capital letter',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]*$/, 'alpha')
    .messages({
      'string.empty': 'Last Name is required',
      'string.pattern.name': '{#label} is not valid',
    }),
});

// Define the Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.empty': "Father's Name is required",
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': "Father's Occupation is required",
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': "Father's Contact Number is required",
  }),
  motherName: Joi.string().trim().required().messages({
    'string.empty': "Mother's Name is required",
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': "Mother's Occupation is required",
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': "Mother's Contact Number is required",
  }),
});

// Define the LocalGuardian schema
const localguardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Name is required",
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Occupation is required",
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Contact Number is required",
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': "Local Guardian's Address is required",
  }),
});

// Define the Student schema
const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'object.base': 'Name is required',
  }),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .trim()
    .required()
    .messages({
      'any.only':
        "{#value} is not valid. The gender of the student can be either 'Male', 'Female', or 'Other'.",
      'string.empty': 'Gender is required',
    }),
  dateOfBirth: Joi.string().trim().optional(),
  email: Joi.string().trim().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': '{#value} is not a valid email',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Contact Number is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Emergency Contact Number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .trim()
    .optional(),
  presentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Present Address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian information is required',
  }),
  localGuardian: localguardianValidationSchema.required().messages({
    'object.base': 'Local Guardian information is required',
  }),
  profileImag: Joi.string().trim().optional(),
  isActive: Joi.string().valid('active', 'blocked').trim().default('active'),
});

export default studentValidationSchema;
