import React, { Component } from 'react';
import logo from './logo.svg';
import { EstimationBlock, EstimationRow } from './components/estimation-block/estimation-block.component';
import { Search } from './components/search/search.component';
import './App.css';
// import estimations from './data/estimation.json';
import { AddEstimationButton } from './components/add-estimation/add-estimation.component';
// import { Estimation } from './classes/Estimation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navigation/vertical.nav.menu.component';
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
    fetch('https://my-json-server.typicode.com/michaelagee/est-project-test-json/estimations')
      .then(response => response.json())
      .then(estimations => this.setState({ estimations: estimations }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  addNewEstimation = (e) => {
    const {estimations} = this.state;
    console.log(estimations.length);
    const estimationLength = estimations.length;
    // const estimation = new Estimation(estimations.length + 1, "new Project");
    const addEstimation = {
      name: "new project",
      id: estimationLength + 1
    }
    estimations.push(addEstimation);
    this.setState({ estimations: estimations});
    console.log(this.state.estimations);
  }

  render() {
    const { estimations, searchField } = this.state;
    console.log(estimations)
    const filteredEstimations = estimations.filter(estimation =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <EstimationNameInputGroup addNew={this.addNewEstimation} />
          {/* // <AddEstimationButton onPress={this.addNewEstimation} /> */}
          <Search placeholder="Search Estimations" handleChange={this.handleChange} />
          <EstimationBlock estimations={filteredEstimations}></EstimationBlock>
        </header>
      </div>
    )
  }
}

export default App;
