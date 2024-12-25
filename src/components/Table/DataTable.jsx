import React from "react";
import { Table } from "antd";

const DataTable = ({ data, loading }) => {
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Ismi",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
    ];

    return <Table dataSource={data} columns={columns} loading={loading} rowKey={(record) => record.id} />;
};

export default DataTable;
