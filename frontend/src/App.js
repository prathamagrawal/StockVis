import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Home from './components/Home';
import Stimulator from './components/pages/Stimulator';
import StockVis from './components/pages/StockVis';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
            <Route path="/stimulator" element ={<Stimulator/>}></Route>
            <Route path="/dashboard" element ={<StockVis/>}></Route>
            
          </Routes>
        )}
      </Box>
    </Router>
  );
}

export default App;
