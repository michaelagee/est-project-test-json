import React, { useState, useEffect } from 'react'
import EstimationForm from '../add-estimation/add-estimation.form.component';

const EstimationDetails = (props) => {
  console.log(props.estimation);
  let capabilities = props.estimation.capabilities;
  for (const property in capabilities) {
    console.log(`${property}: ${capabilities[property]}`)
  }
    return (

      <div>
        <h1>Estimate Details</h1>
        <p>Application Views: {props.estimation.views}</p>
        {/* <p>Application Capabilities: {props.estimation.capabilities.map((capability) => )} */}
        <EstimationForm estimation={props.estimation}/>
      </div>
    )
}

export default EstimationDetails
