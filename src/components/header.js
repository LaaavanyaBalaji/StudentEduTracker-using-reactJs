import React from "react";
import { IoMdMenu } from "react-icons/io";

function Header({ toggleNavbar }) {
  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center' }}>
      <IoMdMenu className="menu-icon" onClick={toggleNavbar} style={{ marginRight: '10px' }} />
      <h1 style={{
        backgroundColor: '#333', 
        color: 'white',
        margin: 0,
        padding: '20px',
        fontSize: '1.5rem',
        flexGrow: 1,   // This allows the h1 to take up all available space
        textAlign: 'start',
        borderBottom: '2px solid #444'
      }}>
        Student Management
      </h1>
    </header>
  );
}

export default Header;
