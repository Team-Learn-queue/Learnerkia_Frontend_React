import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import { TrashIcon } from "../../../assets/icons/Icons";
import Checkbox from "../Checkbox";
import { useState } from "react";

// Sample data
const data = [
  { roleName: "User", dateCreated: "12 - 08 - 2023" },
  { roleName: "Staff", dateCreated: "12 - 08 - 2023" },
  { roleName: "Content Management", dateCreated: "12 - 08 - 2023" },
  { roleName: "Certificate Management", dateCreated: "12 - 08 - 2023" },
  { roleName: "Reporting and Analytics", dateCreated: "12 - 08 - 2023" },
  { roleName: "Assessments", dateCreated: "12 - 08 - 2023" },
  { roleName: "Bill Management", dateCreated: "12 - 08 - 2023" },
];

const columns = [
  {
    // Header checkbox (for select all functionality)
    id: "select",
    header: ({ table }) => <Checkbox />,
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: "roleName",
    header: "Role Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "dateCreated",
    header: "Date Created",
    cell: (info) => info.getValue(),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex gap-6">
        <EditBtn />
        <DeleteBtn />
      </div>
    ),
  },
];

const RoleManagementTable = () => {
  const [rowSelection, setRowSelection] = useState({});

  const tableInstance = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });
  console.log(tableInstance.getRowModel().rows[0].original);

  return (
    <table>
      {/* TABLE HEADER */}
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext)}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* TABLE BODY */}
      <tbody>
        {tableInstance.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-slate-100 hover:cursor-pointer">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleManagementTable;
