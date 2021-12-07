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
      updateEstimation(estimation)
      props.setCurrentEstimation(estimation)
    } else {
      toggleEditForm(true)
    }
  };

  function updateCurrentEstimation(estimation) {
    // console.log(estimation, 'updateCurrentEstimation')
    updateEstimation(estimation)
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
            estimation={props.estimation} />
        }
      </div>
    </FormContext.Provider>
  )
}

export default EstimationDetails
