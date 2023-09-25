import React, { useState } from 'react';
import './Navigator.css';

function Navigator() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    if (selectedDropdown === dropdownName) {
      setSelectedDropdown(null);
      setDropdownOpen(false);
    } else {
      setSelectedDropdown(dropdownName);
      setDropdownOpen(true);
    }
  };

  return (
    <div className="navbar">
      <div className="title">
      <img src="https://assets.smallcase.com/images/publishers/wright-research/logo.png" width="270px" height="43px"/>
      </div>

      <div className="nav-buttons">
        <div className="dropdown">
          <button onClick={() => toggleDropdown('home')}>User Dashboard</button>
          
        </div>
        

        <div className="dropdown">
          <button onClick={() => toggleDropdown('contact')}>Tools</button>
          {isDropdownOpen && selectedDropdown === 'contact' && (
            <div className="dropdown-content">
              <a href="#">Option X</a>
              <a href="#">Option Y</a>
              <a href="#">Option Z</a>
            </div>
          )}
        </div>
        
        <div className="dropdown">
          <button onClick={() => toggleDropdown('contact')}>News and Blogs</button>
          {isDropdownOpen && selectedDropdown === 'contact' && (
            <div className="dropdown-content">
              <a href="#">Option X</a>
              <a href="#">Option Y</a>
              <a href="#">Option Z</a>
            </div>
          )}
        </div>
        
        <div className="dropdown">
          <button onClick={() => toggleDropdown('contact')}>Start Investing</button>
          {isDropdownOpen && selectedDropdown === 'contact' && (
            <div className="dropdown-content">
              <a href="#">Option X</a>
              <a href="#">Option Y</a>
              <a href="#">Option Z</a>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button onClick={() => toggleDropdown('about')}>About</button>
          {isDropdownOpen && selectedDropdown === 'about' && (
            <div className="dropdown-content">
              {/* <a href="#">Option A</a>
              <a href="#">Option B</a>
              <a href="#">Option C</a> */}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navigator;
