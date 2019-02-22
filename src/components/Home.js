import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    /**
     * @class Home
     * @classdesc is a main application tag container
     * @constructor to learn about constructor documentation Go...
     *              https://reactjs.org/docs/react-component.html#constructor
     * @property {object} this.props
     * @example this.props= {
     *    name: {string},
     *    age: {number},
     *    user: {
     *      name: {string},
     *      hobbies: {Array}
     *    };
     * @implements
     *    <Home name={"Chaboncito"} age={27} user={user}/>
     */
    constructor( props ) {
        super();
        this.age = props.age;
        console.log('constructor: ', this);
    }
    
    onMakeOlder() {
        this.age += 3;
        console.log(this.age);
    }
    onMakeYounger() {
        this.age -= 2;
        console.log(this.age);
    }
    
    render() {
        return (
            <main className="App">
                <h1>{this.props.name}</h1>
                <p>your name is {this.props.name} and your age is { this.age }</p>
                {/**
                 * here are two diferents ways or approach in witch you can implement a function on react
                 * the _.bind(this)_ one
                */}
                <button className="botonLoco" onClick={ this.onMakeOlder.bind(this) }>Make me Older!</button>
                {/**
                 * the _arrow function_ one
                */}
                <button className="botonLoco" onClick={ () => this.onMakeYounger() }>Make me Younger!</button>
                {console.log('render-return: ', this)}
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
