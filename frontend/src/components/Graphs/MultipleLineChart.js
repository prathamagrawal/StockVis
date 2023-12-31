import React from 'react';
import { Line } from 'react-chartjs-2';
import { Flex } from '@chakra-ui/react';

const MultipleLineChart = ({ label1, label2, openData, closeData, dates, lastNumber }) => {
    const oData = openData.slice(lastNumber);
    const cData = closeData.slice(lastNumber);
    const dData = dates.slice(lastNumber);
    let delayed;
    const data = {
        labels: dData,
        datasets: [
            {
                label: label1,
                data: oData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointRadius: 0,

            },
            {
                label: label2,
                data: cData,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 100 + context.datasetIndex * 10;
                }
                return delay;
            },
        },
        scales: {
            x: [
                {
                    scaleLabel: {
                        display: false, // Hide x-axis labels
                    },
                    type: 'time',
                    time: {
                        unit: 'day',
                    },
                },
            ],
            y: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <Flex width="100%">
            <Line data={data} options={options} />
        </Flex>
    );
};

export default MultipleLineChart;
