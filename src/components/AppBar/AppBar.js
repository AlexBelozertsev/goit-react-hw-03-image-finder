import React from 'react';
import './AppBar.css';
import Header from './Header';

const AppBar = ({ text }) => (
  <header className="AppBar">
    <Header text={text} />
  </header>
);

export default AppBar;
