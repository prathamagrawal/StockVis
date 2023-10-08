import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Flex, Text } from '@chakra-ui/react';

import csvData from '../../../static/listings.csv';

const DashHeader = ({ data }) => {
    const [formData, setformData] = useState([]);
    const [matchedRecord, setMatchedRecord] = useState(null);

    useEffect(() => {
        Papa.parse(csvData, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: result => {
                setformData(result.data);
            }
        });
    }, []);

    useEffect(() => {
        for (let i = 0; i < formData.length; i++) {
            const item = formData[i];
            if (item.symbol === data.symbol) {
                const { name, symbol } = item;
                console.log(`Found record: Name: ${name}, Symbol: ${symbol}`);
                setMatchedRecord({ name, symbol });
                return;
            }
        }

        console.log(`${data.symbol} is not present as a symbol.`);
        setMatchedRecord(null);
    }, [data.symbol, formData]);

    const headerStyles = {
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#1a202c",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        color: "white",
        border: "1px solid #34495e",
    };

    return (
        <>
            {matchedRecord && (
                <Flex style={headerStyles}>
                    <Text fontSize="2xl" fontWeight="bold">
                        {matchedRecord.name} ({matchedRecord.symbol})
                    </Text>
                </Flex>
            )}
        </>
    );
};

export default DashHeader;
