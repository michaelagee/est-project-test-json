import React, { useState, useEffect } from 'react'

const EstimationDetails = (props) => {
  
  console.log(props.estimation, 'pop props');

    console.log("huh", props);
    return (
      <div>
        <p>Estimation Name: {props.estimation.name}</p>
        <p>Project ID: {props.estimation.id}</p>
        <p>Project Platform: {props.estimation.platform}</p>
        <p>Project Hourly: {props.estimation.hourly_rate}</p>
        <p>Application Type: {props.estimation.application_type}</p>
        <p>Application Views: {props.estimation.views}</p>
      </div>
    )
}

export default EstimationDetails
