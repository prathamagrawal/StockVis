import React, { useState,useEffect } from 'react';
import Papa from 'papaparse';

import csvData from '../../../static/listings.csv'
const DashHeader = ({ formData }) => {
    console.log(formData);

    const [data, setData] = useState([]);

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
    
    return (
        <div>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DashHeader;
