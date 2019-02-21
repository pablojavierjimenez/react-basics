import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    let user = {
      name: 'jey jey',
      hobbies: [ 'running', 'play violin']
    };
    return (
      <div className="App">
        <Header />
        <Home name={"Chaboncito"} age={27} user={user}/>
      </div>
      );
    }
  }

  export default App;
