import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    useColorMode,
} from '@chakra-ui/react';
import StockDataTable  from './StockDataTable';

function StockVisForm() {
    const { colorMode } = useColorMode();
    const [symbol, setSymbol] = useState('');
    const [interval, setInterval] = useState();
    const [functioncall, setFunctioncall] = useState();
    const [downloadCSV, setDownloadCSV] = useState();
    const [stockData, setStockData] = useState(null); 
    const [showDataTable, setShowDataTable] = useState(false); 

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

    const handleSubmit = (e) => {
        e.preventDefault();
        sendDataToServer(formData);
    };

    const formData = {
        symbol: symbol,
        interval: interval,
        functioncall: functioncall,
        downloadCSV: downloadCSV,
    };

    const sendDataToServer = async (data) => {
        try {

            console.log(data);
            const response = await axios.post('http://127.0.0.1:5000/submit', data);
            const getResponse = await axios.get('http://127.0.0.1:5000/submit');
            console.log('GET Response:', getResponse);
            setStockData(getResponse.data);
            setShowDataTable(true);
            const rawdata=getResponse.data;
            console.table(rawdata);
        } catch (error) {
            console.error('Error sending data:', error);
        }

    };

    return (
        <Box p={4}  borderRadius="md" boxShadow="md" bg={colorMode === 'light' ? 'white' : 'gray.800'}>
            <Heading mb={4}>Fill in the details:</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb={4}>
                    <FormLabel htmlFor="symbol">Symbol:</FormLabel>
                    <Input
                        type="text"
                        id="symbol"
                        value={symbol}
                        onChange={(e) => handleChange(e, 'symbol')}
                        required
                    />
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
                        {/* <option value="TIME_SERIES_DAILY_ADJUSTED">TIME_SERIES_DAILY_ADJUSTED</option> */}
                        <option value="TIME_SERIES_WEEKLY">TIME_SERIES_WEEKLY</option>
                        <option value="TIME_SERIES_WEEKLY_ADJUSTED">TIME_SERIES_WEEKLY_ADJUSTED</option>
                        <option value="TIME_SERIES_MONTHLY">TIME_SERIES_MONTHLY</option>
                        {/* <option value="TIME_SERIES_MONTHLY_ADJUSTED">TIME_SERIES_MONTHLY_ADJUSTED</option> */}
                    </Select>
                </FormControl>
                <Button type="submit" colorScheme="teal">
                    Submit
                </Button>
            </form>
            {showDataTable && <StockDataTable data={stockData} />}
        </Box>
    );
}

export default StockVisForm;
