import React, { Component } from "react";
import EstimationBlock from "./components/estimation-block/estimation-block.component";
import "./App.css";
import "./dashboard/dashboard.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EstimationNavigationBar from "./components/navigation/vertical.nav.menu.component";
import { CurrentEstimationTotalCost } from "./context/currentEstimationTotal.context";
import { NewEstimation } from "./data/newEstimation";

class App extends Component {
  constructor() {
    super();

    this.state = {
      env: "local",
      totalCost: 0,
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
      newEstimation: {
        name: "",
        id: 0,
        views: ["landing"],
        general_estimate_features: ["geolocationn"],
        // platform_specific_features: ["camera"],
        capabilities: ["biometrics"],
        media: ["Image Optimzation"],
      },
    };
  }

  componentDidMount() {
    this.getEstimations()
    .then((res) => this.setState({ estimations: res.estimations }))
    .catch((err) => console.log(err));
    console.log("app component mount", this.state.estimations);
  }

  getEstimations = async () => {
    if (this.state.env === "local") {
      const response = await fetch("http://localhost:1020/estimations")
        .then((response) => response.json())
        .then((data) => {
          console.log("App.js -> success: ", data);
          return data;
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      return response;
    } else {
      const response = await fetch(
        "https://ej1wmnqenl.execute-api.us-east-1.amazonaws.com/dev/estimations",
        {
          cache: "no-cache",
        }
      );

      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }
      console.log(body, "body");
      return body;
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
    const { estimations } = this.state;

    let newEstimation = { ...NewEstimation };
    newEstimation.id = estimations.length + 1;
    newEstimation.name = this.state.searchField;
    estimations.push(newEstimation);
    let newEstimationsCollection = estimations;

    // TODO: MOVE THIS TO AN API LAYER
    const response = await fetch("http://localhost:1020/estimations", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ estimations: newEstimationsCollection }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success: ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  updateTotalCost = (totalCost) => {
    // console.log(totalCost, "TOTALCOST");
  };

  render() {
    const { estimations, searchField } = this.state;
    const filteredEstimations = estimations.filter((estimation) =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log('re-render');
    return (
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
          {/* <GlobalContext.Provider value = {this.state} */}
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
                  : this.state.estimations
              }
            ></EstimationBlock>
          </div>
        </div>
      </CurrentEstimationTotalCost.Provider>
    );
  }
}

export default App;
