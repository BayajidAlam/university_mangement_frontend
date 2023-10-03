import StepperForm from "@/components/StepperForm/SteperForm";
import BasicInfo from "@/components/StudentForms/BasicInfo";
import GuardianInformation from "@/components/StudentForms/GuardianInformation";
import LocalGuardianInformation from "@/components/StudentForms/LocalGuardianInformation";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudent = () => {
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

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h1>Create student</h1>
      <StepperForm steps={steps} />
    </div>
  );
};

export default CreateStudent;
