import React from 'react'
import { Form, Button } from 'react-bootstrap';
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';
import InlineCheckBoxes from './inlineCheckBox.component';

function EstimationForm(props) {

  return (
    <EstimationInvoice totalCost={props.totalCost} rate={props.rate} estimation={props.estimation}/>
  )
}

export default EstimationForm;