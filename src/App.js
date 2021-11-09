import React, { Component } from 'react';
import logo from './logo.svg';
import EstimationBlock from './components/estimation-block/estimation-block.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EstimationNavigationBar from './components/navigation/vertical.nav.menu.component';
import { EstimationNameInputGroup } from './components/input/input.group.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      estimations: [],
      searchField: '',
      currentEstimation: {}
    };
  }

  componentDidMount() {
      fetch('http://localhost:3001/estimations')
        .then(response => response.json())
        .then(estimations => this.setState({ estimations: estimations }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  addNewEstimation = (e) => {
    e.preventDefault();
    const { estimations } = this.state;
    const newEstimationName = e.target[0].value;
    const estimationLength = estimations.length;

    const addEstimation = {
      name: newEstimationName,
      id: estimationLength + 1
    }

    estimations.push(addEstimation);
    this.setState({ estimations: estimations });
    e.target[0].value = "";
    console.log(this.state.estimations);
  }

  handleSubmit = (e) => {
    console.log(e.target[0].value);
  }

  handleListItemClick = (e) => {
    console.log('wtf');
  }

  render() {
    const { estimations, searchField } = this.state;
    console.log("estimations", estimations)
    const filteredEstimations = estimations.filter(estimation =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <EstimationNavigationBar searchHandler={this.handleChange} />
        <img src={logo} className="App-logo" alt="logo" />
        <EstimationNameInputGroup handleSubmit={this.addNewEstimation} />
        <EstimationBlock listItemClick={this.handleListItemClick} estimations={filteredEstimations}></EstimationBlock>
      </div>
    )
  }
}

export default App;
