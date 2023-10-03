import React from "react";
import FormSelectField from "../Forms/FormSelectField";
import {
  AcademicDepartmentOptions,
  AcademicFacultyOptions,
  AcademicSemesterOptions,
  bloodGroupOptions,
  genderOptions,
} from "@/constants/global";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import UploadImage from "../ui/UploadImage";
import FormDatePicker from "../Forms/FormDatePicker";
import FormTextArea from "../Forms/FormTextArea";

const BasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "20px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.email"
            size="large"
            label="Email Address"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact No"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact No"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatePicker
            name="admin.dateOfBirth"
            label="Date of Birth"
            size="large"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="student.bloodGroup"
            label="Blood Group"
            options={bloodGroupOptions}
            placeholder="Select"
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea
            name="student.presentAddress"
            label="Present Address"
            rows={4}
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent Address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
