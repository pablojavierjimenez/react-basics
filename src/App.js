import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    let textFromApp = 'como este que viene directo del componente app.js';
    let user = {
      name: 'jey jey',
      hobbies: ['running', 'play violin']
    };
    return (
      <div className="App">
        <Header />
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
        <Home name={"Chaboncito"} age={34} user={user} >
          {/* you most put a child element cause isRequired */}
          <p>
            y aca pondria otro tipo de textos
            <mark> {textFromApp} </mark>
          </p>
        </Home>
      </div>
    );
  }
}

export default App;