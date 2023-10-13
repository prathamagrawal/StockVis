import React from 'react';
import Plot from 'react-plotly.js';

const CandleStick = ({ dateValues, openValues, highValues, lowValues, closeValues }) => {
    
    const trace = {
        x: dateValues,
        close: closeValues,
        high: highValues,
        low: lowValues,
        open: openValues,
        type: 'candlestick',
        name: 'Candlesticks',
    };

    return (
        <Plot
            data={[trace]}
            layout={{
                dragmode:'zoom',
                title: 'Candlestick Chart',
                xaxis: {
                    rangeslider:{
                        visible: false,
                    },
                    title: 'Date',
                },
                yaxis: {
                    title: 'Price',
                },
                shapes:'rect',
                xref:'x',
                yref:'paper',
                fillcolor:'#d3d3d3',
                opacity:0.2,
                line:{
                    width:0
                }

            }
        }
        />
    );
};

export default CandleStick;
