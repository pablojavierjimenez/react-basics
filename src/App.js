import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  constructor(){
    super();

    //VARIABLES AND PROPERTISES
    
    /**
     * *BIND METHODS*
     */
    this.onChangeLinkName = this.onChangeLinkName.bind(this);
    this.onChangeHomeMounted = this.onChangeHomeMounted.bind(this);

    /**
     * *STATES*
     */
    this.state = {
      homeLink: "Home",
      homeMonted: true
    }
  }

  // METHODS:
  onGreet() {
    alert('que hacelga!');
  }

  /** 
   * Particularmente esta _funcion_ se encarga de actualizar el estado de:
   * this.state.homeLink lo que da como resultado la actualizacion de el valor del texto del link
   * en el stateless cmponent _<Header>_ pero el flujo de funcionamiento es:
   * la funcion que maneja el cambio de estado ( en este caso on _onChangeLinkName_)
   * es pasada al componente _<Home>_, donde es recivido a travez de la la props _changeLink_
   * alli es encapsulada y al ser gatillada, en el parametro _newName_ se le pasa el this.state.homeLink,
   * pero de los estados del componente _<Home>_, es asi que la funcion es disparada en el componente _<App>_
   * actualizando asi el valor de _homeLink_, probocando de ese modo la cascada de actualizaciones
   * en las cuales se actualiza el componente _<Header>_
  */
  onChangeLinkName( newName ) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted () {
    this.setState({
      homeMonted: !this.state.homeMonted
    });
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

    let homeCompo = '';

    if(this.state.homeMonted) {
      homeCompo = (
        <Home
          name={"Chaboncito"}
          initialAge={34}
          user={user}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName}
          initialLinkName={this.state.homeLink}>
          <mark> {textFromApp} </mark>
        </Home>
      );
    }

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
        <Header homeLink={this.state.homeLink} />
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
        { homeCompo }

      </div>
    );
  }
}

export default App;
