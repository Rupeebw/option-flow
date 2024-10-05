// Header Component for NSE Data Visualization

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__title">NSE Data Visualization</div>
      <nav className="header__nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="header__language">
        <select>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
