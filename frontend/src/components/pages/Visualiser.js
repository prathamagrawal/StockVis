import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import StockVisForm from './Visualiser/StockVisForm';

function Visualiser(){
    return (
        <Flex>
            <Box>
                <StockVisForm />
            </Box>
        </Flex>
    );
}

export default Visualiser;