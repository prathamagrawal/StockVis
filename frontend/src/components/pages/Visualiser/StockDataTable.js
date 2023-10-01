import React from 'react';

const StockDataTable = ({ data }) => {
    return (
        <div>
            <h2>Stock Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item['1. open']}</td>
                            <td>{item['2. high']}</td>
                            <td>{item['3. low']}</td>
                            <td>{item['4. close']}</td>
                            <td>{item['5. volume']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockDataTable;
