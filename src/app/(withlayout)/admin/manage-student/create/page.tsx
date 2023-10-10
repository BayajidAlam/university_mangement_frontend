"use client";

import StepperForm from "@/components/StepperForm/SteperForm";
import BasicInfo from "@/components/StudentForms/BasicInfo";
import GuardianInformation from "@/components/StudentForms/GuardianInformation";
import LocalGuardianInformation from "@/components/StudentForms/LocalGuardianInformation";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddStudentWithFormDataMutation } from "@/redux/api/studentApi";
import { message } from "antd";

const CreateStudentPage = () => {
  const [addStudentWithFormData] = useAddStudentWithFormDataMutation();
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <BasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInformation />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInformation />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    console.log(values,'value');
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...");
    try {
      const res = await addStudentWithFormData(formData);
      if (!!res) {
        message.success("Student created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1 style={{ margin: "10px 0px" }}>Create Student</h1>

      <StepperForm
        persistKey="student-create-form"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
