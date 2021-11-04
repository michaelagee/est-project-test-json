import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import estimations from './data/estimation.json';


class App extends Component {

  constructor() {
    super();
    this.state = estimations
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>{ this.state.estimations.map(estimation => <h1 key={estimation.id}> { estimation.name } </h1>) }</code>
          </p>
          <button onClick={() => this.setState({ string: "hello rager" })}>Change Text</button>
        </header>
      </div>
    )
  }
}

export default App;
