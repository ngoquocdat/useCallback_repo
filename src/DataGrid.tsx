import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import SkeletonParagraph from "./SkeletonUIs/SkeletonParagraph";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

const gridSkeletons = {
  lines: 13,
  columns: [
    { name: "column-0", width: 30 },
    { name: "column-0", width: 90 },
    { name: "column-0", width: 150 },
    { name: "column-0", width: 150 },
    { name: "column-0", width: 110 },
    { name: "column-0", width: 160 }
  ]
};

const CustomLoadingOverlay = () => {
  const columnsSkeleton = gridSkeletons.columns.map((col) => {
    return (
      <div className={col.name} style={{ width: `${col.width - 10}px` }}>
        <SkeletonParagraph lines={gridSkeletons.lines} />
      </div>
    );
  });

  return (
    <div style={{ display: "flex", gap: "10px", margin: "0px 15px" }}>
      {columnsSkeleton}
    </div>
  );
};

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        loading
        components={{
          LoadingOverlay: CustomLoadingOverlay
        }}
        rows={[]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
