import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    /**
     * @class Home
     * @classdesc is a main application tag container
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
    render() {
        var localText = "tetox";
        return (
            <main className="App">
                <h1>{this.props.name}</h1>
                <p>{localText}</p>
                <p>your name is {this.props.name} and your age is {this.props.age}</p>
                <ul>user object => {this.props.user.hobbies.map((hobbie, indexKey) => <li key={indexKey}> {hobbie}</li>)}</ul>

                {this.props.children}
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
    age: PropTypes.number.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string,
        hobbies: PropTypes.array
    }),
    children: PropTypes.element.isRequired
};

export default Home;
