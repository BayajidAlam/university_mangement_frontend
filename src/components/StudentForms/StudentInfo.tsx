"use client";

import React from "react";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/UploadImage";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import { departmentOptions, genderOptions } from "@/constants/global";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
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
            name="student.name.firstName"
            size="large"
            label="First Name"
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
            name="student.name.middleName"
            size="large"
            label="Middle Name"
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
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <FormSelectField
            size="large"
            name="student.academicDepartment"
            label="Academic Department"
            options={genderOptions}
            placeholder="Select"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <FormSelectField
            size="large"
            name="student.academicFaculty"
            label="Academic Faculty"
            options={genderOptions}
            placeholder="Select"
          />
        </Col>
        <Col className="gutter-row" span={8}>
          <FormSelectField
            size="large"
            name="student.academicSemester"
            label="Academic Semester"
            options={genderOptions}
            placeholder="Select"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
