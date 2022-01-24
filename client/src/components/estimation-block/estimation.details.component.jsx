import React, { useContext, useState } from 'react'
import AddEstimationWizard from '../../pages/detail.page.component';
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';
import { Button, Form } from 'react-bootstrap';
import { FormContext } from '../../context/Form.context';
import axios from 'axios';

const EstimationDetails = (props) => {
  let rate = 225;
  const [showEditForm, setShowEditForm] = useState(false);
  const [estimation, updateEstimation] = useState(props.estimation)
  const { form } = useContext(FormContext)

  const onClick = () => {
    if (showEditForm) {
      toggleEditForm(false);
      props.updateEstimation(estimation)
      // console.log(props, estimation, 'closed the form')
      // i think i have to find the current estimation and update all estimations 
      // at this point.
      let indexToBeReplaced = props.estimations.findIndex((el) => el.id === estimation.id)
      let newCollection = props.estimations
      newCollection.splice(indexToBeReplaced, 1, estimation);
      props.updateEstimations(newCollection)
      updateEstimations(newCollection)
    } else {
      toggleEditForm(true)
    }
  };

  const deleteEstimation = () => {
    const filteredCollection = props.estimations.filter(currentEstimation => currentEstimation.id != props.estimation.id);
    updateEstimations(filteredCollection);
    toggleEditForm(false)
    props.updateEstimations(filteredCollection)
  }

  function updateCurrentEstimation(newEstimation) {
    updateEstimation(estimation => {
      return { ...estimation, ...newEstimation }
    })
  }

  function updateEstimations(estimations) {
    const url = 'https://ej1wmnqenl.execute-api.us-east-1.amazonaws.com/dev/estimations';
    axios.post(url, estimations)
      .then(response => {
        console.log('POST_RESPONSE:updateEstimations ', response);
      })
  }

  function toggleEditForm(showForm) {
    setShowEditForm(showForm)
    props.setShowStepWizard(showForm)
  };

  return (
    <FormContext.Provider value={{ form }}>
      <div>
        <h1>Estimate Details : {props.estimation.name} - {props.estimation.application_type}</h1>
        <p>Total Hours: 780 : Rate: ${rate}</p>
        <p>Author: {props.estimation.clientName || "West Cary Group"}</p>
        <Button variant="primary" onClick={onClick}>
          {showEditForm ? 'Save Changes' : 'Edit form'}
        </Button>
        {showEditForm ?
          <Button variant="primary" onClick={deleteEstimation}>
            Delete Estimation
          </Button> : null
        }

        {showEditForm ?
          <AddEstimationWizard
            initialStep={1}
            getTotalCost={props.getTotalCost}
            updateTotalCost={props.updateTotalCost}
            totalCost={props.totalCost}
            rate={rate}
            updateEstimation={updateCurrentEstimation}
            estimation={props.estimation} />
          :
          <EstimationInvoice
            getTotalCost={props.getTotalCost}
            updateTotalCost={props.updateTotalCost}
            totalCost={props.totalCost}
            rate={rate}
            estimation={estimation} />
        }
      </div>
    </FormContext.Provider>
  )
}

export default EstimationDetails
