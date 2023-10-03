import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First Name is required"),
      middleName: yup.string().required("Middle Name is required"),
      lastName: yup.string().required("Last Name is required"),
    }),
    email: yup.string().email().required("Email is required"),
    designation: yup.string().required("Designation is required"),
    dateOfBirth: yup.string().required("Date Of Birth is required"),
  }),
});


//     "dateOfBirth": "12-12-1994",
//     "gender": "male",
//     "bloodGroup": "O+",
//     "contactNo": "admin_5",
//     "emergencyContactNo": "01600000000",
//     "presentAddress": "Dhaka",
//     "permanentAddress": "Dhaka",
//     "managementDepartment": "64cd44da02f799152d4d1ca5",
//     "designation": "HR Manager",
//     "profileImage": "limk"
