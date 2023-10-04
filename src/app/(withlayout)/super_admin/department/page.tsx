"use client";

// imports
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { useDebounced } from "@/redux/hook";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import dayjs from "dayjs";

const ManageDepartment = () => {
  // query
  const query: Record<string, any> = {};

  // states
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // assign to query
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  // create debounce hook
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  // set debounce on searchTem if debounce exist
  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  // get department data
  const { data, isLoading } = useDepartmentsQuery({ ...query });
  // department delete hook
  const [deleteDepartment] = useDeleteDepartmentMutation();

  const departments = data?.departments;
  const meta = data?.meta;

  // define columns of table
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => deleteHandler(data?.id)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  // pagination
  const onPaginationChange = (page: number, pageSize: number) => {
    // console.log(page, pageSize);
    setPage(page);
    setSize(pageSize);
  };

  // sortBy and sortOrder
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  // reset filters
  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  // delete a department
  const deleteHandler = async (id: string) => {
    message.loading("Deleting...");
    try {
      // console.log(data);
      deleteDepartment(id);
      message.success("Department deleted successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <ActionBar title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search Department"
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button
              style={{
                margin: "10px",
              }}
              type="primary"
            >
              Create
            </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button onClick={resetFilter} type="primary">
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        onTableChange={onTableChange}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartment;
