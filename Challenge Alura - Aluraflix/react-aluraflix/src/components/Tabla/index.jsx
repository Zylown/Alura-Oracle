import React from "react";
import { Table } from "antd";

export const Tabla = () => {
  const data = [
    {
      key: "0",
      name: "Edward King 0",
      age: "32",
      address: "London, Park Lane no. 0",
    },
    {
      key: "1",
      name: "Edward King 1",
      age: "32",
      address: "London, Park Lane no. 1",
    },

    {
      key: "2",
      name: "Edward King 1",
      age: "32",
      address: "London, Park Lane no. 1",
    },
  ];
  return (
    <div style={{ color: "white" }}>
      <Table dataSource={data} style={{backgroundColor:"red"}}></Table>
    </div>
  );
};
