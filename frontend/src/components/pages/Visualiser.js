import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import StockVisForm from './Visualiser/StockVisForm';
import Dashboard from './Visualiser/Dashboard';

function Visualiser(){
    return (
        <Flex>
            <Box>
                <StockVisForm />
                <Dashboard />
            </Box>
        </Flex>
    );
}

export default Visualiser;