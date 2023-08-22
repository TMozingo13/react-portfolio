import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import { Fresh } from './scenes/projects/Fresh';
import { Case } from './scenes/projects/Case';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="case" element={<Case />} /> 
      <Route path="fresh" element={<Fresh/>}/>

    </Routes>
  </Router>
  );
};

export default App;
