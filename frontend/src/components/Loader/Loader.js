import React, { useState, useEffect } from 'react';
import { Spinner, Box, Text } from '@chakra-ui/react';


const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        },1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box
            display={showLoader ? 'flex' : 'none'}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            marginTop="-20vh" // Shift the spinner upward
        >
            <Spinner size="xl" />
            <Text mt="4" fontWeight="bold" fontSize="5xl" >
                StockVis...
            </Text>
        </Box>
    );
};

export default Loader;
