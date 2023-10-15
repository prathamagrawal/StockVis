// CandlestickChart.js
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
// import { Flex } from '@chakra-ui/react';
import './style.css';

const CandlestickChart = ({ dateValues, openValues, highValues, lowValues, closeValues, lastNumber }) => {
  // Combine the data into an array of arrays for Highcharts
  
  const rawdata = dateValues.map((date, index) => [
    date,
    openValues[index],
    highValues[index],
    lowValues[index],
    closeValues[index],
  ]);
  const data = rawdata.slice(lastNumber);

  const options = {

    rangeSelector: {
      selected: 1,
    },
    xAxis: {
      type: 'category',
    },
    plotOptions: {
      candlestick: {
        animation: true, 
      },
    },
    title: {
      text: 'Candlestick Chart',
    },
    series: [
      {
        type: 'candlestick',
        name: 'Candlestick',
        data: data,
        color: '#4cc1c0',
      },
    ],
  };

  return (
    <div className='chart-wrapper'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CandlestickChart;
