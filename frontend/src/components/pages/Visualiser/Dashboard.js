import React from 'react';

const Dashboard = ({ data }) => {
    const openValues = [];
    const highValues = [];
    const lowValues = [];
    const closeValues = [];
    const volumeValues = [];
    data.forEach((item) => {
        openValues.push(item['1. open']);
        highValues.push(item['2. high']);
        lowValues.push(item['3. low']);
        closeValues.push(item['4. close']);
        volumeValues.push(item['5. volume']);
    });
    console.log(highValues);
    return (

        <div><h1>Dashboard</h1></div>
    );
};

export default Dashboard;
