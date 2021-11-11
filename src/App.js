import React, { Component } from 'react';
import logo from './logo.svg';
import EstimationBlock from './components/estimation-block/estimation-block.component';
import './App.css';
import './dashboard/dashboard.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EstimationNavigationBar from './components/navigation/vertical.nav.menu.component';
import { EstimationNameInputGroup } from './components/input/input.group.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      env: 'local',
      estimations: [{name: "No Project", id: 0}],
      searchField: '',
      searchButtonTitle: 'Search',
      currentEstimation: {}
    };
  }

  
  componentDidMount() {
    if (this.state.env == 'local') {
      // change the fetch to http://localhost:<json-server-port>/estimations to interact with live data.
        fetch('http://localhost:3001/estimations')
          .then(response => response.json())
          // oh and you'll have to change the estimations in state to estimations.estimations <>_<>
          .then(estimations => this.setState({ estimations: estimations }));
    } else {
      // change the fetch to http://localhost:<json-server-port>/estimations to interact with live data.
      fetch('estimations.json')
        .then(response => response.json())
        // oh and you'll have to change the estimations in state to estimations.estimations <>_<>
        .then(estimations => this.setState({ estimations: estimations.estimations }));
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    const { estimations, searchField } = this.state;
    console.log("estimations", estimations)
    const filteredEstimations = estimations.filter(estimation =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(filteredEstimations, 'filteredEstimations');
    if (filteredEstimations.length == 0) {
      console.log('no frank, you fucked up');
    } else {
      console.log('you a tiger, a lady tiger')
      this.setState({ searchButtonTitle: 'Add New' });
    }
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

  handleListItemClick = (e) => {

  }

  render() {
    const { estimations, searchField } = this.state;
    console.log("estimations", estimations)
    const filteredEstimations = estimations.filter(estimation =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <EstimationNavigationBar buttonTitle={this.state.searchButtonTitle} searchHandler={this.handleChange} handleSubmit={this.addNewEstimation} />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <EstimationNameInputGroup handleSubmit={this.addNewEstimation} /> */}
        <div className="dashboard-container">
          <EstimationBlock className="dashboard-item" listItemClick={this.handleListItemClick} estimations={estimations}></EstimationBlock>
          </div>
      </div>
    )
  }
}

export default App;
