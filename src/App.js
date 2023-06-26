import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import { Project1 } from './scenes/projects/Project1';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="project-1" element={<Project1 />} /> 

    </Routes>
  </Router>
  );
};

export default App;
