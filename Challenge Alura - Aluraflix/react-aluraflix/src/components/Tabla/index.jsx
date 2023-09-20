import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
    width: "20%",
  },
  {
    title: "Descripción",
    dataIndex: "descripcion",
    key: "descripcion",
    width: "50%",
  },
  {
    title: "Editar",
    //dataIndex: "editar",
    key: "editar",
    width: "8%",
    render: () => <a>Editar</a>,
  },
  {
    title: "Remover",
    //dataIndex: "",
    key: "x",
    width: "8%",
    render: () => <a>Remover</a>,
  },
];

export const Tabla = () => {
  const data = [
    {
      key: "0",
      nombre: "BackEnd",
      descripcion: "Todos los videos que estoy usando para estudiar BackEnd",
      editar: "Editar",
      remover: "Remover",
    },
    {
      key: "1",
      nombre: "BackEnd",
      descripcion: "Todos los videos que estoy usando para estudiar BackEnd",
      editar: "Editar",
      remover: "Remover",
    },

    {
      key: "2",
      nombre: "BackEnd",
      descripcion: "Todos los videos que estoy usando para estudiar BackEnd",
      editar: "Editar",
      remover: "Remover",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};
