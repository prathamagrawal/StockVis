import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Box, Button, Select, VStack } from '@chakra-ui/react';

import csvData from './listings.csv';

function StockQuote() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        Papa.parse(csvData, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: result => {
                setData(result.data);
            }
        });
    }, []);

    const handleDropdownChange = event => {
        setSelectedItem(event.target.value);
    };

    const handleTimeChange = event => {
        setSelectedTime(event.target.value);
    };

    return (
            <VStack spacing={4} >
                <form>
                    <Box>
                        <label>
                            Select a Name (Symbol):
                            <Select value={selectedItem} onChange={handleDropdownChange}>
                                <option value="">Select an option</option>
                                {data.map(item => (
                                    <option key={item.symbol} value={item.symbol}>
                                        {item.name} ({item.symbol})
                                    </option>
                                ))}
                            </Select>
                        </label>
                    </Box>
                    <Box>
                        <label>
                            Select Time:
                            <Select value={selectedTime} onChange={handleTimeChange}>
                                <option value="">Select an option</option>
                                <option value="2">2 years</option>
                                <option value="5">5 years</option>
                                <option value="10">10 years</option>
                            </Select>
                        </label>
                    </Box>
                    <Box>
                        <label>
                            Select Amount to be Invested (USD):
                            <Select value={selectedTime} onChange={handleTimeChange}>
                                <option value="">Select an option</option>
                                <option value="10">10$ </option>
                                <option value="100">100$ </option>
                                <option value="1000">1000$ </option>
                            </Select>
                        </label>
                    </Box>
                    <br />
                    <Button type="submit" colorScheme="blue">
                        Submit
                    </Button>
                </form>
            </VStack>
    );
}

export default StockQuote;
