import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Home from './components/Home';
import Visualiser from './components/pages/Visualiser';
import StockQuote from './components/pages/Stimulator/StockQuote';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Router>
      <Box>
        {loading ? (
          <Loader onFinish={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element ={<Home/>}></Route>
            <Route path="/stimulator" element ={<StockQuote/>}></Route>
            <Route path="/dashboard" element ={<Visualiser/>}></Route>
            
          </Routes>
        )}
      </Box>
    </Router>
  );
}

export default App;
