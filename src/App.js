import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  // METHODS:
  onGreet() {
    alert('que hacelga!');
  }
  onCHangeLinkName() {
    alert('que hacelga!');
  }
  render() {
    /** 
     * Como veras lo que declaro aca adentro es parte de la funcion _render()_
     * es por eso que puedo accesarlo libremente sin la necesidad de apelar al _this_
    */
    let textFromApp = ' como este que viene directo del componente app.js ';
    let user = {
      name: 'jey jey',
      hobbies: ['running', 'play violin']
    };
    /**
     * 
     */
    return (
      <div className="App">
        {/**
         * **Header** is an example of an stateLess component
         * its mean that the component itself n use or implement the 
         * react state, insted of that it use the values recived by props
         * @reference https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
         */}
        <Header homeLink="Home" />
        {/**
         * _Acerca de lo elemento hijos de un componente_
         * los componentes pueden utilizarse como un cierre en si mismos,
         * eg: *<Home />*
         * o tambien como elementos tag de apertura y cierre, los cuales pueden incluir 
         * otros elementos html, o componentes 
         * estos seran recibidos en en la clase en el objeto _this.props.children_
         * eg: 
         *    *<Home>*
         *      *<p>soy hijo de home</p>*
         *    *</Home>*
         */}
        <Home name={"Chaboncito"} initialAge={ 34 } user={ user } greet={ this.onGreet }>
          <mark> {textFromApp} </mark>
        </Home>

      </div>
    );
  }
}

export default App;
