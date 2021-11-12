import React, { Component } from "react";
import EstimationBlock from "./components/estimation-block/estimation-block.component";
import "./App.css";
import "./dashboard/dashboard.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EstimationNavigationBar from "./components/navigation/vertical.nav.menu.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      env: "local",
      estimations: [
        {
          name: "No Project",
          id: 0,
          views: ["landing"],
          general_estimate_features: ["geolocationn"],
          platform_specific_features: ["camera"],
          capabilities: ["biometrics"],
          media: ["Image Optimzation"],
          random: [
            {
              ios: {
                enabled: true,
                hours: 20,
              },
            },
          ],
        },
      ],
      searchField: "",
      searchButtonTitle: "Search",
      filteredEstimation: [],
      currentEstimationHours: 0,
    };
  }

  componentDidMount() {
    if (this.state.env === "local") {
      fetch("http://localhost:3001/estimations")
        .then((response) => response.json())
        .then((estimations) => this.setState({ estimations: estimations }));
    }

    if (this.state.env === "amplify") {
      fetch("estimation.json")
        .then((response) => response.json())
        .then((estimations) =>
          this.setState({ estimations: estimations.estimations })
        );
    }
  }

  handleChange = (e) => {
    const { estimations, searchField } = this.state;
    const filteredEstimations = estimations.filter((estimation) =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    );
    this.setState({ searchField: e.target.value });
  };

  searchEstimations = (e) => {
    if (this.state.estimations > 0) {
      const { estimations, searchField } = this.state;
      const filteredEstimations = estimations.filter((estimation) =>
        estimation.name.toLowerCase().includes(searchField.toLowerCase())
      );
      this.setState({ estimations: filteredEstimations });
    }
  };

  addNewEstimation = (e) => {
    e.preventDefault();
    const { estimations } = this.state;
    const newEstimationName = e.target[0].value;
    const estimationLength = estimations.length;

    const addEstimation = {
      name: newEstimationName,
      id: estimationLength + 1,
    };

    estimations.push(addEstimation);
    this.setState({ estimations: estimations });
    e.target[0].value = "";
  };

  handleListItemClick = (e) => {};

  render() {
    const { estimations, searchField } = this.state;
    const filteredEstimations = estimations.filter((estimation) =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <EstimationNavigationBar
          estimationsCount={filteredEstimations.length}
          searchHandler={this.handleChange}
          handleSubmit={
            filteredEstimations.length > 0
              ? this.searchEstimations
              : this.addNewEstimation
          }
        />
        <div className="dashboard-container">
          <EstimationBlock
            className="dashboard-item"
            listItemClick={this.handleListItemClick}
            estimationsCount={filteredEstimations.length}
            estimations={
              filteredEstimations.length > 0
                ? filteredEstimations
                : this.state.estimations
            }
          ></EstimationBlock>
        </div>
      </div>
    );
  }
}

export default App;
