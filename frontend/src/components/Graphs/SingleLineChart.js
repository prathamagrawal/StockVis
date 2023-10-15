import React from 'react';
import { Line } from 'react-chartjs-2';
import { Flex } from '@chakra-ui/react';
const SingleLineChart = ({ volumeData, dateData,lastNumber,labelName }) => {
    const vData = volumeData.slice(lastNumber);
    const dData = dateData.slice(lastNumber);
    const scaled=vData.map(value => value / 10000000);
    const data = {
        labels: dData,
        datasets: [
            {
                label: labelName,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 0,
                data: scaled,
            },
        ],
    };
    let delayed
    const options={
        animation:{
            onComplete: () =>{
                delayed=true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 100 + context.datasetIndex * 10;
                }
                return delay;
            }
        }
    };

    return (
        <Flex width="100%">
            <Line data={data} options={options}/>
        </Flex>
        
    );
};

export default SingleLineChart;
