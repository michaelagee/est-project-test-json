import React, { useEffect, useState } from 'react'
import AddEstimationWizard from '../../pages/detail.page.component';
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';
import { Button } from 'react-bootstrap';

const EstimationDetails = (props) => {
  let rate = 225;
  const [showEditForm, setShowEditForm] = useState(false);
  
  // useEffect(() => {
  //   console.log(props.showStepWizard)
  //   setShowEditForm(props.showStepWizard)
  // }, [props.showStepWizard])

  const onClick = () => {
    if (showEditForm) {
      setShowEditForm(false)
      props.setShowStepWizard(false)
    } else {
      setShowEditForm(true)
      props.setShowStepWizard(true)
    }
  };
  return (

    <div>
      <h1>Estimate Details : {props.estimation.name} - {props.estimation.application_type}</h1>
      <p>Total Hours: 780 : Rate: ${rate}</p>
      <Button variant="primary" onClick={onClick}>
        { showEditForm ? 'Save Changes' : 'Edit form' }
      </Button>
      {/* <AddEstimationWizard getTotalCost={props.getTotalCost} updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={rate} estimation={props.estimation} /> */}
      {showEditForm ?
        <AddEstimationWizard initialStep={1} getTotalCost={props.getTotalCost} updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={rate} estimation={props.estimation} /> :
        <EstimationInvoice getTotalCost={props.getTotalCost} updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={rate} estimation={props.estimation} /> 
      }
    </div>
  )
}

export default EstimationDetails
