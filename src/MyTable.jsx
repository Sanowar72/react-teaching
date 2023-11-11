import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import mydata from "./dummy";
export default function MyTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      },
      {
        accessorFn: (originalRow) => originalRow.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
      },
      {
        accessorKey: "gender",
        header: "Gender",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      },
      {
        accessorKey: "class",
        header: "Class",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      },
      {
        accessorKey: "rollNo",
        header: "Roll No",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      },
      {
        accessorKey: "email",
        header: "Email",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={mydata}
      //ßenableRowSelection //enable some features
      enableColumnOrdering
      enableGlobalFilter={false} //turn off a feature
    />
  );
}
