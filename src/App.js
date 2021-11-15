import React, { Component } from "react";
import EstimationBlock from "./components/estimation-block/estimation-block.component";
import "./App.css";
import "./dashboard/dashboard.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EstimationNavigationBar from "./components/navigation/vertical.nav.menu.component";
import { GlobalContext } from "./context/global-state";

class App extends Component {
  constructor() {
    super();

    this.state = {
      env: "amplify",
      totalCost: 1,
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
    console.log(estimations, "estimatinos");
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

  updateTotalCost(addedCost) {
    const { totalCost } = this.state;
    if (totalCost) {
      let subTotal = totalCost;
      console.log(subTotal, "SUBTOTAL!!!");

      this.setState({ totalCost: totalCost });
    }
    console.log("guess i'm just stuck in my waaays");
  }

  render() {
    const { estimations, searchField } = this.state;
    const filteredEstimations = estimations.filter((estimation) =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <GlobalContext.Provider value={this.state.estimations}>
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
              estimationsCount={filteredEstimations.length}
              totalCost={this.state.totalCost}
              updateCost={() =>
                this.updateTotalCost.bind(this, this.state.totalCost)
              }
              estimations={
                filteredEstimations.length > 0
                  ? filteredEstimations
                  : this.state.estimations
              }
            ></EstimationBlock>
          </div>
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
