import React, { Component } from 'react';
import logo from './logo.svg';
import { EstimationBlock, EstimationRow } from './components/estimation-block/estimation-block.component';
import { Search } from './components/search/search.component';
import './App.css';
import estimations from './data/estimation.json';


class App extends Component {

  constructor() {
    super();
    this.state = {
      estimations: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/michaelagee/est-project-test-json/estimations')
      .then(response => response.json())
      .then(estimations => this.setState({ estimations: estimations }));
  }

  render() {
    const { estimations, searchField } = this.state;
    const filteredEstimations = estimations.filter(estimation =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search placeholder="Search Estimations" handleChange={e => this.setState({ searchField: e.target.value })} />
          <EstimationBlock estimations={filteredEstimations}></EstimationBlock>
        </header>
      </div>
    )
  }
}

export default App;
