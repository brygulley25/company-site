import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
// import Signup from './components/pages/Signup';
import About from './components/pages/About';

const App = () => (
<Router>
<Navbar />
<Routes>
  <Route path='/home'  element={<Home/>} />
  <Route path='/services' element={<Services/>} />
  {/* <Route path='/sign-up' element={<Signup/>} /> */}
  <Route path='/about' element={<About/>} />
  <Route path="/" element={<Home />} default />
</Routes>
</Router>
);

export default App;
