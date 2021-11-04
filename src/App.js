import React, { Component } from 'react';
import logo from './logo.svg';
import { EstimationRow } from './components/estimation-row/estimation-row.component';
import './App.css';
import estimations from './data/estimation.json';


class App extends Component {

  constructor() {
    super();
    this.state = {
      estimations: []
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/michaelagee/est-project-test-json/estimations')
      .then(response => response.json())
      .then(estimations => this.setState({ estimations: estimations }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EstimationRow name="mike">
          {this.state.estimations.map(estimation => (
            <h1 key={estimation.id}> {estimation.name} </h1>
          ))}
          </EstimationRow>
        </header>
      </div>
    )
  }
}

export default App;
