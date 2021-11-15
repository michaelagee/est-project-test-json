import React, { useState, useEffect } from 'react'
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';

const EstimationDetails = (props) => {
  console.log(props);
  let rate = 225;

  function calculateTotalCost(fees) {
    props.totalCost += fees;

  }
    return (

      <div>
        <h1>Estimate Details : {props.estimation.name} - {props.estimation.application_type}</h1>
        <p>Total Hours: 780 : Rate: ${rate}</p>
        <button onClick={() => props.updateCost()}>Get total</button>
        <EstimationInvoice totalCost={props.totalCost} rate={rate} estimation={props.estimation}/>
      </div>
    )
}

export default EstimationDetails
