import React from 'react';
import { Flex, Button, useColorMode } from '@chakra-ui/react';

const Stimulator = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Flex
            width="300px"
            height="300px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={isDarkMode ? 'rgba(48, 48, 48, 0.5)' : 'rgba(255, 255, 255, 0.5)'}
            backdropFilter="blur(10px)"
            borderRadius="md"
            boxShadow="lg"
        >
            <Button
                size="lg"
                colorScheme="blue"
                variant="outline"
                width="200px"
                leftIcon={<span role="img" aria-label="Toggle">{isDarkMode ? '🌙' : '☀️'}</span>}
                onClick={toggleColorMode}
            >
            Dark Mode
            </Button>
        </Flex>
    );
};

export default Stimulator;
