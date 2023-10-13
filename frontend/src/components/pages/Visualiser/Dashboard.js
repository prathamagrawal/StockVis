import React from 'react';
import { Flex } from '@chakra-ui/react';
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";
import MultipleLineChart from './Graphs/MultipleLineChart.js';


Chart.register(CategoryScale);

const Dashboard = ({ data }) => {

    function convertDateStringsInPlace(dateStrings) {
        dateStrings.forEach((dateString, index) => {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString("en", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
            });
            const formattedTime = date.toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
            });
            dateStrings[index] = `${formattedDate} ${formattedTime}`;
        });
    }



    const dateValues = data.map((item) => item['date']);
    const openValues = data.map((item) => item['1. open']);
    const closeValues = data.map((item) => item['4. close']);
    const highValues = data.map((item) => item['2. high']);
    const lowValues = data.map((item) => item['3. low']);
    // const volumeValues = data.map((item) => item['5. volume']);
    convertDateStringsInPlace(dateValues);


        return (
            <Flex width="100%">
                <MultipleLineChart label1={'Open'} label2={'Close'} openData={openValues} closeData={closeValues} dates={dateValues} lastNumber={-75} />
                <MultipleLineChart label1={'Low'} label2={'High'} openData={lowValues} closeData={highValues} dates={dateValues} lastNumber={-75} />
            </Flex>
        );
    };

    export default Dashboard;

