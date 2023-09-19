import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';


function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const pythonServerURL = 'http://127.0.0.1:5000/getData';
        axios.get(pythonServerURL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const columns = React.useMemo(
        () =>
            data.length > 0
                ? Object.keys(data[0]).map((col) => {
                    return {
                        Header: col,
                        accessor: col,
                    };
                })
                : [],
        [data]
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div>
            <h1>Data Table from Python Server</h1>
            {data.length > 0 ? (
                <table {...getTableProps()} className="table">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}


export default Dashboard;
