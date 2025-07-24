import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface DatatablesProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

function Datatables<T>({ columns, data }: DatatablesProps<T>) {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      striped
      highlightOnHover
      dense
    />
  );
}

export default Datatables;
