import React from 'react';
import { Flex, Text, Button, Image, ChakraProvider, Switch, useColorMode } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faArrowTrendUp, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';
import logoTransparent from './images/logoTransparent.svg';
import logoImage from './images/Logo.svg';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    const navigate = useNavigate(); 

    const handleStockFun = () => {
        navigate('/stimulator')
    };

    const handleStockVis = () => {
        navigate('/dashboard')
    };

    return (
        <ChakraProvider>
            <Flex
                height="100vh"
                flexDirection={['column', 'row']}
            >
                {/* Left Part */}
                <Flex
                    flex={['1', '1']}
                    justifyContent="center"
                    alignItems="center"
                    bg={isDarkMode ? 'gray.800' : 'gray.100'}
                    flexDirection="column"
                >
                    <Image src={isDarkMode ? logoImage : logoTransparent} alt="Logo" maxH="50%" />
                    <Text mt="4" fontSize="4xl" fontFamily="Google Sans, sans-serif" fontWeight="bold" letterSpacing="wide" color={isDarkMode ? 'white' : 'gray.700'}>
                        Welcome to StockVis
                    </Text>
                </Flex>

                <Flex
                    flex={['1', '1']}
                    justifyContent="center"
                    alignItems="center"
                    bg={isDarkMode ? 'gray.900' : 'gray.200'}
                    flexDirection="column"
                >
                    <Switch isChecked={isDarkMode} onChange={toggleColorMode} mb="4" />

                    <Button
                        size="lg"
                        colorScheme="blue"
                        variant="outline"
                        width="300px"
                        height="100px"
                        leftIcon={<FontAwesomeIcon icon={faMoneyCheckDollar} />}
                        css={buttonStyles}
                        mb="4"
                        onClick={handleStockVis}
                    >
                        Stock Visualization
                    </Button>
                    <Button
                        size="lg"
                        colorScheme="green"
                        variant="outline"
                        width="300px"
                        height="100px"
                        leftIcon={<FontAwesomeIcon icon={faArrowTrendUp} />}
                        css={buttonStyles}
                        mb="4"
                        onClick={handleStockFun}
                    >
                        Stock Prediction Fun
                    </Button>
                    <Button
                        size="lg"
                        colorScheme="purple"
                        variant="outline"
                        width="300px"
                        height="100px"
                        leftIcon={<FontAwesomeIcon icon={faPhoneVolume} />}
                        css={buttonStyles}
                        mb="4"
                    >
                        Contact me
                    </Button>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

const buttonStyles = css`
    &:hover {
        background-color: #fff;
        color: #000;
        border-color: #000;
    }
`;

export default HomePage;
