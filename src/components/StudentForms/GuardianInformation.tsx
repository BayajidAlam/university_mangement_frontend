import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import {
  AcademicDepartmentOptions,
  AcademicFacultyOptions,
  AcademicSemesterOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";

const GuardianInformation = () => {
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
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.fatherName"
            size="large"
            label="Father Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.fatherOccupation"
            size="large"
            label="Father Occupation"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.fatherContactNo"
            size="large"
            label="Father Contact No"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.motherName"
            size="large"
            label="Mother Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.motherOccupation"
            size="large"
            label="Mother Occupation"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.motherContactNo"
            size="large"
            label="Mother Contact No"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInput
            type="text"
            name="student.guardian.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default GuardianInformation;
