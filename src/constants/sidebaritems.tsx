import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { USER_ROLE } from "./role";
import Link from "next/link";

export const sideBarItems = (role: string) => {
  const defaultSideBarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSideBarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: `/${role}/manage-student`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      key: `/${role}/manage-faculty`,
      icon: <TableOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    ...commonAdminSideBarItems,
    {
      label: "Manage academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    ...commonAdminSideBarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
    // {
    //   label: "Manage permission",
    //   key: "manage-permission",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/permission`}>View permissions</Link>,
    //       key: `/${role}/permission`,
    //     },
    //   ],
    // },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
  ];

  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSideBarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/courses/schedule`,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/registration`,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/academic-report`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSideBarItems;
  }
};
