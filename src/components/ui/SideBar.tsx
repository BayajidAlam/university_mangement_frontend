"use client";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import React, { useState } from "react";
import { sideBarItems } from "@/constants/sidebaritems";
import { getUserInfo } from "@/services/auth.service";


const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {role} = getUserInfo() as any;
  // console.log(role);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={200}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        PHU
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sideBarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
