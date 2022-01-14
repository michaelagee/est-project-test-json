import React, { Component } from "react";
import EstimationBlock from "./components/estimation-block/estimation-block.component";
import "./App.css";
import "./dashboard/dashboard.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EstimationNavigationBar from "./components/navigation/vertical.nav.menu.component";
import { CurrentEstimationTotalCost } from "./context/currentEstimationTotal.context";
import { NewEstimation } from "./data/newEstimation";
import { GlobalContext } from "./context/global-state";
import Data from "./data.json";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      env: "amplify",
      totalCost: 0,
      updateGlobalEstimations: this.updateGlobalEstimations,
      getTotalCost: this.getTotalCost,
      updateTotalCost: this.updateTotalCost,
      estimations: [
        {
          ...NewEstimation,
        },
      ],
      searchField: "",
      searchButtonTitle: "Search",
      filteredEstimation: [],
    };
  }

  updateGlobalEstimations = (newEstimationsCollection) => {
    this.setState({ estimations: newEstimationsCollection });
  };

  componentDidMount() {
    // this.getEstimations()
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // // this.setState({ estimations: Data.estimations });
    this.getEstimations()
      .then((res) => this.setState({estimations: res.estimations}));
  }

  getEstimations = async () => {
    if (this.state.env === "local") {
      const response = await fetch("http://localhost:1020/estimations");

      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    } else {
      const response = await fetch(
        "https://ej1wmnqenl.execute-api.us-east-1.amazonaws.com/dev/estimations",
        {
          cache: "no-cache",
        }
      );

      const res = await response.json();

      if (response.status !== 200) {
        throw Error(res.message);
      }
      console.log("RETURN BODY", JSON.parse(res.body))
      return JSON.parse(res.body);
    }
  };

  getTotalCost = () => {
    return this.state.totalCost;
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  searchEstimations = (e) => {
    e.preventDefault();
    if (this.state.estimations > 0) {
      const { estimations, searchField } = this.state;
      const filteredEstimations = estimations.filter((estimation) =>
        estimation.name.toLowerCase().includes(searchField.toLowerCase())
      );
      this.setState({ estimations: filteredEstimations });
    }
  };

  addNewEstimation = async (e) => {
    e.preventDefault();
    e.value = "";
    const { estimations } = this.state;

    let newEstimation = { ...NewEstimation };
    newEstimation.id = estimations.length + 1;
    newEstimation.name = this.state.searchField;
    let newEstimationsCollection = estimations;
    newEstimationsCollection.push(newEstimation);
    this.setState({
      estimations: newEstimationsCollection,
    });

    const url = "https://ej1wmnqenl.execute-api.us-east-1.amazonaws.com/dev/postEstimations-dev";
    axios.post(url, newEstimationsCollection).then((response) => {
      console.log('response from POST', JSON.parse(response.config.data));
    });
  };

  updateTotalCost = (totalCost) => {
    // console.log(totalCost, "TOTALCOST");
  };

  render() {
    const { estimations, searchField } = this.state;
    let filteredEstimations = [];
    // if (estimations > 0) {
      filteredEstimations = estimations.filter((estimation) =>
        estimation.name.toLowerCase().includes(searchField.toLowerCase())
      );
    // } else {
    //   filteredEstimations = [NewEstimation];
    // }

    return (
      <GlobalContext.Provider value={this.state}>
        <CurrentEstimationTotalCost.Provider value={this.state}>
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
                updateTotalCost={this.updateTotalCost}
                getTotalCost={this.getTotalCost}
                estimations={
                  filteredEstimations.length > 0
                    ? filteredEstimations
                    : estimations
                }
              ></EstimationBlock>
            </div>
          </div>
        </CurrentEstimationTotalCost.Provider>
      </GlobalContext.Provider>
    );
  }
}

export default App;
