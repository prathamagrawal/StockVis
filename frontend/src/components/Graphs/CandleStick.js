// CandlestickChart.js
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
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
    chart: {
      backgroundColor: '#1a202c',
    },
    rangeSelector: {
      selected: 1,
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
          color: 'white', // Set the x-axis labels color to white
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: 'white', // Set the y-axis labels color to white
        },
      },
    },
    plotOptions: {
      candlestick: {
        animation: true,
      },
    },
    title: {
      text: 'Candlestick Chart',
      style: {
        color: 'white', // Set the chart title color to white
      },
    },
    series: [
      {
        type: 'candlestick',
        name: 'Candlestick',
        style:{
          color:'whtie',
        },
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
