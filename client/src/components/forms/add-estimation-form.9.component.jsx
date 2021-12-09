import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';

function AddEstimationForm9(props) {
    console.log(props, 'form 9 props')
    const rate = 225
    return (
        <>
            <EstimationInvoice
                rate={rate}
                getTotalCost={props.getTotalCost}
                updateTotalCost={props.updateTotalCost}
                totalCost={props.totalCost}
                estimation={props.estimation} />
            <Button variant="primary" onClick={props.previousStep}>
                Previous Step
            </Button>
        </>
    )
}

export default AddEstimationForm9;