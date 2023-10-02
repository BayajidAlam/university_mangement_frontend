'use client'

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdmin = () => {
  const { role } = getUserInfo() as any;

  return (
    <div style={{
      padding: '10px',
    }}>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
       <ActionBar title="Admin List">
        <Link href={`/${role}/manage-faculty/create`}>
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdmin;
