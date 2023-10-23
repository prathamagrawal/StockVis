import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Text,
    FormControl,
    FormLabel,
    Select,
    Button,
    useColorMode,
    Flex,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import Papa from 'papaparse';
import Dashboard from './Dashboard';
import DashHeader from './DashHeader';
import '../../Applyfont.css';
import csvData from '../../../static/listings.csv';

function StockVisForm() {
    const [formInput, setformInput] = useState([]);
    // const [selectedItem, setSelectedItem] = useState('');
    useEffect(() => {
        Papa.parse(csvData, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: result => {
                setformInput(result.data);
            }
        });
    }, []);
    // const handleDropdownChange = event => {
    //     setSelectedItem(event.target.value);
    // };

    const { colorMode } = useColorMode();
    const [symbol, setSymbol] = useState('');
    const [interval, setInterval] = useState();
    const [functioncall, setFunctioncall] = useState();
    const [downloadCSV, setDownloadCSV] = useState();
    const [stockData, setStockData] = useState(null);
    const [userInput, setUserInput] = useState(null);
    const [showDashboard, setShowDashboard] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });
    const handleChange = (e, field) => {
        switch (field) {
            case 'symbol':
                setSymbol(e.target.value);
                break;
            case 'interval':
                setInterval(e.target.value);
                break;
            case 'functioncall':
                setFunctioncall(e.target.value);
                break;
            case 'downloadCSV':
                setDownloadCSV(e.target.value);
                break;
            default:
                break;
        }
    };
    const formData = {
        symbol: symbol,
        interval: interval,
        functioncall: functioncall,
        downloadCSV: downloadCSV,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        sendDataToServer(formData);
        setUserInput(formData);
    };
    const sendDataToServer = async (data) => {
        try {
            await axios.post('http://127.0.0.1:5000/submit', data);
            const getResponse = await axios.get('http://127.0.0.1:5000/submit');
            console.log('GET Response:', getResponse);
            setStockData(getResponse.data);
            setShowDashboard(true);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    
    return (
        <div>
            {isMobile ? (
                <VStack spacing={4}> {/* Use VStack for vertical stacking */}
                    <Box p={4} borderRadius="md" boxShadow="md" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
                        <Text fontSize="3xl" fontWeight="bold">Fill in the details:</Text>
                        <form onSubmit={handleSubmit}>
                        <FormControl mb={4}>
                                <FormLabel htmlFor="symbol">Symbol:</FormLabel>
                                <Select value={symbol} onChange={(e) => handleChange(e, 'symbol')} isSearchable isClearablei>
                                    {/* <option value="">Select an option</option> */}
                                    {formInput.map(item => (
                                        <option key={item.symbol} value={item.symbol}>
                                            {item.name} ({item.symbol})
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="interval">Interval:</FormLabel>
                                <Select
                                    id="interval"
                                    value={interval}
                                    onChange={(e) => handleChange(e, 'interval')}
                                >
                                    <option value="1min">1min</option>
                                    <option value="5min">5min</option>
                                    <option value="15min">15min</option>
                                    <option value="30min">30min</option>
                                    <option value="60min">60min</option>
                                </Select>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="downloadCSV">Download CSV?</FormLabel>
                                <Select
                                    id="downloadCSV"
                                    value={downloadCSV}
                                    onChange={(e) => handleChange(e, 'downloadCSV')}
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Select>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="functioncall">Function Call:</FormLabel>
                                <Select
                                    id="functioncall"
                                    value={functioncall}
                                    onChange={(e) => handleChange(e, 'functioncall')}
                                >
                                    <option value="TIME_SERIES_INTRADAY">TIME_SERIES_INTRADAY</option>
                                    <option value="TIME_SERIES_DAILY">TIME_SERIES_DAILY</option>
                                    <option value="TIME_SERIES_WEEKLY">TIME_SERIES_WEEKLY</option>
                                    <option value="TIME_SERIES_WEEKLY_ADJUSTED">TIME_SERIES_WEEKLY_ADJUSTED</option>
                                    <option value="TIME_SERIES_MONTHLY">TIME_SERIES_MONTHLY</option>
                                </Select>
                            </FormControl>
                            <Button type="submit" colorScheme="teal">
                                Submit
                            </Button>
                        </form>
                    </Box>
                    {showDashboard && (
                        <Box p={4} borderRadius="md" boxShadow="md" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
                            <DashHeader data={userInput} />
                            <Dashboard data={stockData} />
                        </Box>
                    )}
                </VStack>
            ) : (
                <Flex>
                    <Box p={4} borderRadius="md" boxShadow="md" bg={colorMode === 'light' ? 'white' : 'gray.800'} width="20%">
                        <Text fontSize="3xl" fontWeight="bold">Fill in the details:</Text>
                        <form onSubmit={handleSubmit}>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="symbol">Symbol:</FormLabel>
                                <Select value={symbol} onChange={(e) => handleChange(e, 'symbol')} isSearchable isClearablei>
                                    {/* <option value="">Select an option</option> */}
                                    {formInput.map(item => (
                                        <option key={item.symbol} value={item.symbol}>
                                            {item.name} ({item.symbol})
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="interval">Interval:</FormLabel>
                                <Select
                                    id="interval"
                                    value={interval}
                                    onChange={(e) => handleChange(e, 'interval')}
                                >
                                    <option value="1min">1min</option>
                                    <option value="5min">5min</option>
                                    <option value="15min">15min</option>
                                    <option value="30min">30min</option>
                                    <option value="60min">60min</option>
                                </Select>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="downloadCSV">Download CSV?</FormLabel>
                                <Select
                                    id="downloadCSV"
                                    value={downloadCSV}
                                    onChange={(e) => handleChange(e, 'downloadCSV')}
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Select>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel htmlFor="functioncall">Function Call:</FormLabel>
                                <Select
                                    id="functioncall"
                                    value={functioncall}
                                    onChange={(e) => handleChange(e, 'functioncall')}
                                >
                                    <option value="TIME_SERIES_INTRADAY">TIME_SERIES_INTRADAY</option>
                                    <option value="TIME_SERIES_DAILY">TIME_SERIES_DAILY</option>
                                    <option value="TIME_SERIES_WEEKLY">TIME_SERIES_WEEKLY</option>
                                    <option value="TIME_SERIES_WEEKLY_ADJUSTED">TIME_SERIES_WEEKLY_ADJUSTED</option>
                                    <option value="TIME_SERIES_MONTHLY">TIME_SERIES_MONTHLY</option>
                                </Select>
                            </FormControl>
                            <Button type="submit" colorScheme="teal">
                                Submit
                            </Button>
                        </form>
                    </Box>
                    {showDashboard && (
                        <Box width="80%" borderRadius="md" boxShadow="md" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
                            <DashHeader data={userInput} />
                            <Dashboard data={stockData} />
                        </Box>
                    )}
                </Flex>
            )}
        </div>
    );
}

export default StockVisForm;
