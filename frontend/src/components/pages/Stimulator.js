import React from 'react';
import { Flex, Button, useColorMode, Box, Image } from '@chakra-ui/react';
import StockQuote from './StockQuote';

const Stimulator = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Flex
            width="100vw"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                bg={isDarkMode ? 'rgba(48, 48, 48, 0.5)' : 'rgba(255, 255, 255, 0.5)'}
                backdropFilter="blur(10px)"
                borderRadius="md"
                boxShadow="lg"
                p={6}
            >
                {/* Left Part */}
                <Box width="50%" pr={4}>
                    <Button
                        size="lg"
                        colorScheme="blue"
                        variant="outline"
                        width="100%"
                        leftIcon={<span role="img" aria-label="Toggle">{isDarkMode ? '🌙' : '☀️'}</span>}
                        onClick={toggleColorMode}
                    >
                        Dark Mode
                    </Button>
                    <StockQuote />
                </Box>

                {/* Right Part */}
                <Box width="50%" pl={4}>
                    <Image src="/path-to-your-image.jpg" alt="Image" />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Stimulator;
