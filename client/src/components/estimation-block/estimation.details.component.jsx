import React, { useContext, useState } from 'react'
import AddEstimationWizard from '../../pages/detail.page.component';
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';
import { Button, Form } from 'react-bootstrap';
import { FormContext } from '../../context/Form.context';

const EstimationDetails = (props) => {
  // console.log(props, 'estimations details props')
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
      console.log(newCollection, "new collection")
      props.updateEstimations(newCollection)
      updateEstimations(newCollection)
    } else {
      toggleEditForm(true)
    }
  };

  function updateCurrentEstimation(newEstimation) {
    // console.log(newEstimation, 'updateCurrentEstimation')
    updateEstimation(estimation => {
      return{...estimation, ...newEstimation}
    })
    // console.log(estimation, 'new estimation details component')
  }

  function updateEstimations (estimations) {
    console.log(estimations)
    // const response = fetch("http://localhost:1020/postEstimations", {
    //   method: "POST",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify({ estimations: estimations }),
    // });

    // const body = response.json();

    // if (response.status !=== 200) {
    //   throw Error(body.message);
    // }
    // console.log(body, "body");
    // return body;
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
        {/* <AddEstimationWizard getTotalCost={props.getTotalCost} updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={rate} estimation={props.estimation} /> */}
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
