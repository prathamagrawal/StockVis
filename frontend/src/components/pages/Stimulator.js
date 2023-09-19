import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import StockQuote from './Stimulator/StockQuote';
import StockVisLogo from '../images/Logo.svg';
import styled from 'styled-components'; 

const StyledFlex = styled(Flex)`
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledImage = styled(Image)`
    width: 50%;
    height: 50%;
    max-width: 300px; 
`;

function Stimulator() {
    return (
        <StyledFlex>
            <Box flex="1">
                <StockQuote />
            </Box>
            <Box flex="1">
                <StyledImage src={StockVisLogo} alt="Your Image" />
            </Box>
        </StyledFlex>
    );
}

export default Stimulator;
