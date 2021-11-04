import React, { Component } from 'react';
import logo from './logo.svg';
import { EstimationBlock, EstimationRow } from './components/estimation-block/estimation-block.component';
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
          <EstimationBlock estimations={this.state.estimations}></EstimationBlock>
        </header>
      </div>
    )
  }
}

export default App;
