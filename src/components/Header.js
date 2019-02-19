import React, { Component } from 'react';
import logo from '../logo.svg';


class Header extends Component {
    render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App">
          <ul>
            <li><a href="./home">HOME</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
