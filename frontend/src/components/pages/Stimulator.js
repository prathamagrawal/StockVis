import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import StockQuote from './StockQuote';
import StockVis from '../images/Logo.svg';

function Stimulator() {
    return (
        <Flex minHeight="100vh" justifyContent="center" alignItems="center">
            <Box flex="1">
                <StockQuote />
            </Box>
            <Box flex="1">
                <Image src={StockVis} alt="Your Image" w="50%" h="50%" />
            </Box>
        </Flex>
    );
}

export default Stimulator;
