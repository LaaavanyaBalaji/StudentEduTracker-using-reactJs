import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import MainContent from './components/maincontent';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="App">
      <Header toggleNavbar={toggleNavbar} />
      <Navbar visible={isNavbarVisible} />
      <MainContent />
    </div>
  );
}

export default App;
