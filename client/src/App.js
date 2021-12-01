import React, { Component } from "react";
import EstimationBlock from "./components/estimation-block/estimation-block.component";
import "./App.css";
import "./dashboard/dashboard.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EstimationNavigationBar from "./components/navigation/vertical.nav.menu.component";
import { CurrentEstimationTotalCost } from "./context/currentEstimationTotal.context";
import { NewEstimation } from './data/newEstimation';

class App extends Component {
  constructor() {
    super();

    this.state = {
      env: "local",
      totalCost: 0,
      updateName: this.updateName,
      getTotalCost: this.getTotalCost,
      updateTotalCost: this.updateTotalCost,
      estimations: [
        {
          name: "No Project",
          id: 0,
          views: ["landing"],
          general_estimate_features: ["geolocationn"],
          // platform_specific_features: ["camera"],
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
      newEstimation: {
        name: '',
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
      .then(res => this.setState({ estimations: res.estimations }))
      .catch(err => console.log(err));
  }

  getEstimations = async () => {
    const response = await fetch('https://0zn0kksez5.execute-api.us-east-1.amazonaws.com/dev/estimations', {
      cache: 'no-cache'
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body, 'body')
    return body;
  };


  // TODO: MOVE TO API LAYER
  // getEstimations = async() => {
  //   if (this.state.env === "local") {
  //     await fetch("http://localhost:3001/estimations")
  //       .then((response) => response.json())
  //       .then((estimations) => this.setState({ estimations: estimations }));
  //   }
  
  //   if (this.state.env === "amplify") {
  //     await fetch("estimation.json")
  //       .then((response) => response.json())
  //       .then((estimations) =>
  //         this.setState({ estimations: estimations.estimations })
  //       );
  //   }
  // }

  getTotalCost = () => {
    return this.state.totalCost;
  };

  updateName = (newName) => {
    console.log('new name', newName)
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  
  searchEstimations = (e) => {
    e.preventDefault();
    if (this.state.estimations > 0) {
      const { estimations, searchField } = this.state;
      console.log(searchField, 'searchField');
      const filteredEstimations = estimations.filter((estimation) =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
      );
      this.setState({ estimations: filteredEstimations });
    }
  };
  
  addNewEstimation = async (e) => {
    e.preventDefault();
    const { estimations } = this.state;
    
    let newEstimation = {...NewEstimation}
    newEstimation.id = estimations.length + 1
    newEstimation.name = this.state.searchField
    estimations.push(newEstimation)

    console.log(estimations, 'estimations')
    let newEstimationsCollection = estimations
    console.log(newEstimationsCollection, 'new estimations')
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
      body: JSON.stringify({"estimations": newEstimationsCollection}),
    });

    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body, 'body')
    // return body;

    this.setState({
      estimations: body.estimations
    });

    this.getEstimations();

  };

  updateTotalCost = (totalCost) => {
    console.log(totalCost, "TOTALCOST");
  };

  render() {
    const { estimations, searchField } = this.state;
    const filteredEstimations = estimations.filter((estimation) =>
      estimation.name.toLowerCase().includes(searchField.toLowerCase())
    );
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
          <div className="dashboard-container">
            <EstimationBlock
              className="dashboard-item"
              estimationsCount={filteredEstimations.length}
              totalCost={this.state.totalCost}
              updateTotalCost={this.updateTotalCost}
              getTotalCost={this.getTotalCost}
              updateName={this.updateName}
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
