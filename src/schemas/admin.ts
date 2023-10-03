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
    gender: yup.string().required("Gender is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    contactNo: yup.string().required("Contact No is required"),
    emergencyContactNo: yup.string().required("Emergency Contact No is required"),
    presentAddress: yup.string().required("Present Address is required"),
    permanentAddress: yup.string().required("Permanent Address is required"),
    managementDepartment: yup.string().required("Management Department is required"),
    profileImage: yup.string().required("Profile Image is required"),
  }),
});






