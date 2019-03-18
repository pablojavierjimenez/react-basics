import React, { Component } from 'react';
import logo from '../logo.svg';


/**
 * STATELESS component
 * in this kind of component the principal difference is
 * that insted of extend from _React Component_
 * its directly expose a function.
 * en este tipo de componentes podemos usar las props directamente,
 * porque al ser solo una funcion las variables recibidas directamente por parametros
 * se combierten en variables dentro del scope
 * @example
 * const Header = ( props ) => {
 *   return (...)
 * };
 * *insted
 * class Header extends Component {
 *  ...
 * };
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
