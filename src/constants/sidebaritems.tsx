import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { USER_ROLE } from "./role";
import Link from "next/link";

export const sideBarItems = (role: string) => {
  const defaultSideBarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "Account",
          key: "profile",
        },
        {
          label: "Change Password",
          key: "change-password",
        },
      ],
    },
  ];

  const commonAdminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: "manage-student",
    },
  ];

  if (role === USER_ROLE.STUDENT) return defaultSideBarItems;
  else if (role === USER_ROLE.ADMIN) return commonAdminSideBarItems;
};
