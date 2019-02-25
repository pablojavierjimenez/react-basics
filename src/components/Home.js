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
         * @tutorial https://reactjs.org/docs/react-component.html#setstate
         */
        this.state = {
            age: props.initialAge,
            status: 0
        };

        this.onMakeYounger = this.onMakeYounger.bind(this);
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
