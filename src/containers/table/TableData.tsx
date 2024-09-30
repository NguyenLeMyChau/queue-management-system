import React from 'react';
import './TableData.css';

interface TableDataProps {
    columns: any[];
    data: any[];
    onRowClick?: (item: any) => void;
}

export default function TableData({ data, columns, onRowClick }: TableDataProps) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key} className={column.className} style={{ width: column.width }}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr
                        key={item._id}
                        onClick={() => onRowClick && onRowClick(item)}
                        style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                    >
                        {columns.map((column) => (
                            <td key={column.key} className={column.className}>
                                {column.render ? column.render(item[column.dataIndex], item, index) : item[column.dataIndex]}
                            </td>))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}