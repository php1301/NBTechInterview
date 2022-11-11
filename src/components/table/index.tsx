import React, { useMemo } from "react";
import { useTable } from "react-table";

interface TableComponentProps {
    columns: { Header: any; accessor?: string }[];
    data: any;
    className?: string;
}
export const Table: React.FC<TableComponentProps> = ({
    columns,
    data,
    className,
}) => {
    const columnsData = useMemo(() => columns, []);
    const tableData = useMemo(() => [...data], [data]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns: columnsData,
            data: tableData,
        });
    return (
        <div className={`overflow-x-auto relative ${className}`}>
            <table
                {...getTableProps()}
                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    {headerGroups?.map((headerGroup) => (
                        <tr {...headerGroup?.getHeaderGroupProps()}>
                            {headerGroup?.headers?.map((column) => (
                                <th
                                    className="py-3 px-6"
                                    scope="col"
                                    {...column.getHeaderProps()}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        rows?.map((row, i) => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    {...row.getRowProps()}
                                >
                                    {
                                        // Loop over the rows cells
                                        row?.cells?.map((cell) => {
                                            // Apply the cell props
                                            return (
                                                <td
                                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                                    {...cell.getCellProps()}
                                                >
                                                    {cell.column.id ===
                                                    "rowNumber"
                                                        ? i + 1
                                                        : cell.render("Cell")}
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
