import React, { Component } from 'react';
import logo from '../logo.svg';


/**
 * STATELESS component
 * in this kind of component the principal difference is
 * that they
 * class Header extends Component {
 */
const Header = ( props ) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="App">
        <ul>
          <li><a href="./home">{props.homeLink}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
