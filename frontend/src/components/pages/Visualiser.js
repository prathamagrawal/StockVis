import React from 'react';
import { Box } from '@chakra-ui/react';
import StockVisForm from './Visualiser/StockVisForm';


function Visualiser() {
    return (

        <Box> {/* First column, smaller */}
            <StockVisForm />
        </Box>
    );
}

export default Visualiser;
