import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import { Flex } from "@chakra-ui/react";


const Dashboard = ({ data }) => {
    // const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
    const dateValues = [];
    const openValues = [];
    const highValues = [];
    const lowValues = [];
    const closeValues = [];
    const volumeValues = [];

    data.forEach((item) => {
        dateValues.push(item['date'])
        openValues.push(item['1. open']);
        highValues.push(item['2. high']);
        lowValues.push(item['3. low']);
        closeValues.push(item['4. close']);
        volumeValues.push(item['5. volume']);
    });

    useEffect(() => {
        // Your data and layout for the Plotly chart
        const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yArray = [55, 49, 44, 24, 15];

        const plotData = [{
            x: xArray,
            y: yArray,
            type: "bar",
            orientation: "v",
            marker: { color: "rgba(0,0,255)" }
        }];

        const layout = {
            title: "World Wide Wine Production",
            xaxis: {
                title: 'Countries',
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                }
            },
            yaxis: {
                title: 'Production',
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                }
            },
            paper_bgcolor: 'black',
            plot_bgcolor: 'black',
            font: {
                color: 'white'
            }
        };

        Plotly.newPlot("myPlot", plotData, layout);
    }, []);

    return (
        <Flex width="100%">
            <div><div id="myPlot"></div> </div>
            {/* <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={4}>
                <GridItem colSpan={1}>
                    <Box bg="teal.200" p={4} borderRadius="md">
                        Item 1
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box bg="teal.300" p={4} borderRadius="md">
                        Item 2
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box bg="teal.400" p={4} borderRadius="md">
                        Item 3
                    </Box>
                </GridItem>
                <GridItem colSpan={3}>
                    <Box bg="teal.500" p={4} borderRadius="md">
                        Item 4 (spans 3 columns)
                    </Box>
                </GridItem>
            </Grid> */}
        </Flex>
    );
};

export default Dashboard;
