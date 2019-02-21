import React, { Component } from 'react';

class Home extends Component {
  /**
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
    console.log(this.props);
    return (
      <main className="App">
        <h1>{ this.props.name }</h1>
        <p>{localText}</p>
        <p>your name is {this.props.name} and your age is {this.props.age}</p>
        <ul>user object => {this.props.user.hobbies.map( (hobbie,  indexKey ) => <li key={ indexKey }> {hobbie}</li>) }</ul>
      </main>
    );
  }
}



export default Home;
