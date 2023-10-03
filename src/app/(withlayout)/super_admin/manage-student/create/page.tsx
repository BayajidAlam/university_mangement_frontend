import StepperForm from "@/components/StepperForm/SteperForm";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: "Second-content",
    },
    {
      title: "Guardian Information",
      content: "Last-content",
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
