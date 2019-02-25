import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    /**
     * @class Home
     * @classdesc is a main application tag container
     * @constructor to learn about constructor documentation Go...
     *              *reactjs:* https://reactjs.org/docs/react-component.html#constructor
     *              *mozilla:* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor
     * @property {object} this.props
     * @example this.props= {
     *    name: {string},
     *    initialAge: {number},
     *    user: {
     *      name: {string},
     *      hobbies: {Array}
     *    };
     * @implements <Home name={"Chaboncito"} initialAge={27} user={user}/>
     */
    constructor(props) {
        super();
        /**
         * **STATE**
         * differences between _props_ and _states_:
         * @reference https://youtu.be/e5n9j9n83OM?t=24
         * **props:** Los props son la manera que un componente superior manda información a componentes inferiores.
         *            Los props siempre van de componentes superiores a componentes inferiores,
         *            es por eso que React se ganó la fama de tener un flujo de datos uni-direccional.
         * **state:** el estado es 'que pasa' dentro del componente en si mismo, y que no es cambiado desde afuera (parent scope) de este,
         *            y cuyos cambios son disparados y modificados desde dentro del mismo componente,
         *            y el componente tiene control de los 'estados' de su entorno, pero no puede modificar las props
         *            las cuales solo pueden ser modificadas por su parent scope    
         * @tutorial https://reactjs.org/docs/react-component.html#setstate
         * 
         * @NOTE : a good practics is not setting props directly to state
         * @example
         * this.state = {age: props.initialAge}
         * insted of
         * this.state = {age: props.age}
         */
        this.state = {
            age: props.initialAge,
            status: 0
        };

        this.onMakeYounger = this.onMakeYounger.bind(this);

        /**
         * este ejemplo es para demostrar que reac maneja cada variable en su estado por separado
         * entonces no importa cuantas veces se modifique la edad o cualquier otra variable, 
         * nosotros siempre podemos manejar cuando cambia un estado
         */
        setTimeout(() => {
            this.setState({
                status: this.state.status + 1
            })
        }, 3000);
    }


    resetAge () {
        this.setState({
            age: 34
        });
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onMakeYounger() {
        this.setState({
            age: this.state.age - 2
        });
    }

    render() {
        return (
            <main className="App">
                <h1>{this.props.name}</h1>
                <p>your name is {this.props.name} </p>
                <p>age: {this.state.age}</p>
                <p>status: {this.state.status}</p>
                {/**
                 * here are three diferents ways or approach in witch you can implement a function on react
                 * two of thats can be implemented where yo placed the trigger ( case 1 and 2 )
                 * in te third case it is implemented binding the _this_ of the constructor to the function one
                 * that is because the function allways take the context from where is triggered, and in this case
                 * the context is the _render function_, and this is the reason because we need bind the _this of the class_
                 * in the class constructor function
                 * @refernce https://youtu.be/OcM__8q6p4c?t=289
                 * @example 
                 * this.onMakeYounger = this.onMakeYounger.bind(this);
                 */}
                
                {/**
                 * **Case 1**
                 * the _.bind(this)_
                 */}
                <button className="botonLoco" onClick={ this.onMakeOlder.bind(this) }>Make me Older!</button>
                {/**
                 * **Case 2**
                 * the _arrow function_ one
                 */}
                <button className="botonLoco" onClick={ () => this.resetAge() }>Reset Age</button>
                {/**
                 * **Case 3**
                 * the _arrow function_ one
                 */}
                <button className="botonLoco" onClick={ this.onMakeYounger }>Make me Younger!</button>
            </main>
        );
    }
}

/**
 * @description hay que estar bien seguro que los valores declarados
 * no van a cambiar luego de tipo.
 */
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

export default Home;
