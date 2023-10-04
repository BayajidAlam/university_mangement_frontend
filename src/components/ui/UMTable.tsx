"use client";

import { Button, Table } from "antd";
import React from "react";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  showPagination?: boolean;
};
const UMTable = ({
  loading = false,
  columns,
  dataSource,
  onTableChange,
  pageSize,
  totalPages,
  showSizeChanger,
  onPaginationChange,
  showPagination = true,
}: UMTableProps) => {

  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    ></Table>
  );
};

export default UMTable;
