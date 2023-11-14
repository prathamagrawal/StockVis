// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import { Box, Button, Select, VStack } from '@chakra-ui/react';

// import csvData from '../../../static/listings.csv'

// function StockQuote() {
//     const [data, setData] = useState([]);
//     const [selectedItem, setSelectedItem] = useState('');
//     const [selectedTime, setSelectedTime] = useState('');

//     useEffect(() => {
//         Papa.parse(csvData, {
//             download: true,
//             header: true,
//             skipEmptyLines: true,
//             complete: result => {
//                 setData(result.data);
//             }
//         });
//     }, []);

//     const handleDropdownChange = event => {
//         setSelectedItem(event.target.value);
//     };

//     const handleTimeChange = event => {
//         setSelectedTime(event.target.value);
//     };

//     return (
//         <VStack spacing={4}>
//             <form>
//                 <Box>
//                     <label>
//                         Select a Name (Symbol):
//                         <Select value={selectedItem} onChange={handleDropdownChange}>
//                             <option value="">Select an option</option>
//                             {data.map(item => (
//                                 <option key={item.symbol} value={item.symbol}>
//                                     {item.name} ({item.symbol})
//                                 </option>
//                             ))}
//                         </Select>
//                     </label>
//                 </Box>
//                 <Box>
//                     <label>
//                         Select Time:
//                         <Select value={selectedTime} onChange={handleTimeChange}>
//                             <option value="">Select an option</option>
//                             <option value="2">2 years</option>
//                             <option value="5">5 years</option>
//                             <option value="10">10 years</option>
//                         </Select>
//                     </label>
//                 </Box>
//                 <Box>
//                     <label>
//                         Select Amount to be Invested (USD):
//                         <Select value={selectedTime} onChange={handleTimeChange}>
//                             <option value="">Select an option</option>
//                             <option value="10">10$ </option>
//                             <option value="100">100$ </option>
//                             <option value="1000">1000$ </option>
//                         </Select>
//                     </label>
//                 </Box>
//                 <br />
//                 <Button type="submit" colorScheme="blue">
//                     Submit
//                 </Button>
//             </form>
//         </VStack>
//     );
// }

// export default StockQuote;


import React from 'react';
import { Box, Button, Center, ChakraProvider, Text } from '@chakra-ui/react';



function StockQuote() {
    return (
        <ChakraProvider>
            <Center h="100vh">
                <Box
                    p={8}
                    maxW="md"
                    borderWidth={1}
                    borderRadius="md"
                    boxShadow="lg"
                >
                    <Text fontSize="xl" mb={4}>
                        With this feature, you will be able to see how much you have made a profit if you had invested in the a certain stock for a price. 
                        Stay Tuned for this feature...
                    </Text>
                    <Button
                        colorScheme="blue"
                        onClick={() => window.location.href = 'https://github.com/prathamagrawal'}
                    >
                        Go to GitHub
                    </Button>
                </Box>
            </Center>
        </ChakraProvider>
    );
}

export default StockQuote;
