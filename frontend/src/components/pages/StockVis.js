import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import StockVisForm from './StockVis/StockVisForm';
import Dashboard from './StockVis/Dashboard';

function StockVis(){
    return (
        <Flex>
            <Box>
                <StockVisForm />
                <Dashboard />
            </Box>
        </Flex>
    );
}

export default StockVis;