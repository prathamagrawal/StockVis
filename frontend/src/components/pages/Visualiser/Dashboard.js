import React from 'react';
import {   HStack,VStack } from '@chakra-ui/react';
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";
import MultipleLineChart from '../../Graphs/MultipleLineChart.js';
import SingleLineChart from '../../Graphs/SingleLineChart.js';
import CandleStick from '../../Graphs/CandleStick.js';

Chart.register(CategoryScale);

const Dashboard = ({ data }) => {
    console.log(data);

    function convertDateStringsInPlace(dateStrings) {
        dateStrings.forEach((dateString, index) => {
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString("en", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
            });
            // const formattedTime = date.toLocaleTimeString("en", {
            //     hour: "2-digit",
            //     minute: "2-digit",
            // });
            // dateStrings[index] = `${formattedDate} ${formattedTime}`;
            dateStrings[index] = `${formattedDate}`;
        });
    }


    const dateValues = data.map((item) => item['date']);
    const openValues = data.map((item) => parseFloat(item['1. open']));
    const closeValues = data.map((item) => parseFloat(item['4. close']));
    const highValues = data.map((item) => parseFloat(item['2. high']));
    const lowValues = data.map((item) => parseFloat(item['3. low']));
    const volumeValues = data.map((item) => parseFloat(item['5. volume']));
    convertDateStringsInPlace(dateValues);
    console.log(dateValues);

    const pertreturn = closeValues.map((close, index) => {
        const open = openValues[index];
        return ((close - open) / close) * 100;
    });
    
    console.log(pertreturn);
    return (
        <VStack>
            <HStack width="100%">
                <MultipleLineChart label1={'Open'} label2={'Close'} openData={openValues} closeData={closeValues} dates={dateValues} lastNumber={-75} />
                <MultipleLineChart label1={'Low'} label2={'High'} openData={lowValues} closeData={highValues} dates={dateValues} lastNumber={-75} />
                <SingleLineChart volumeData={volumeValues} dateData={dateValues} lastNumber={-75} labelName={"Volume (in millions)"}/>
            </HStack>
            <VStack width="100%">
                <CandleStick dateValues={dateValues} openValues={openValues} highValues={highValues} lowValues={lowValues} closeValues={closeValues} lastNumber={-50} />
            </VStack>
        </VStack>

        
    );
};

export default Dashboard;



