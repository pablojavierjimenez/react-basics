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
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }

    onMakeOlder() {
        /**
         * @tutorial https://reactjs.org/docs/react-component.html#setstate
         */
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
                 * here are two diferents ways or approach in witch you can implement a function on react
                 * the _.bind(this)_ one
                */}
                <button className="botonLoco" onClick={this.onMakeOlder.bind(this)}>Make me Older!</button>
                {/**
                 * the _arrow function_ one
                */}
                <button className="botonLoco" onClick={() => this.onMakeYounger()}>Make me Younger!</button>
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
