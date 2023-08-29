import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import StockVisForm from './StockVis/StockVisForm';

function StockVis(){
    return (
        <Flex>
            <Box>
                <StockVisForm />
            </Box>
        </Flex>
    );
}

export default StockVis;