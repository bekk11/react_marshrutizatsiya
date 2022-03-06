import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigate';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';


//bu funksiya routla yordamida URL adresga qarab qaysidir componentni ishga tushiradi
function App() {
  return(
      <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
  );
}

export default App;