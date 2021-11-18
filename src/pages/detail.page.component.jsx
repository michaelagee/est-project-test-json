import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AddEstimationForm1 from '../components/forms/add-estimation-form.1.component';
import AddEstimationForm2 from '../components/forms/add-estimation-form.2.component';
import AddEstimationForm3 from '../components/forms/add-estimation-form.3.component';
import AddEstimationForm4 from '../components/forms/add-estimation-form.4.component';
import AddEstimationForm5 from '../components/forms/add-estimation-form.5.component';
import AddEstimationForm6 from '../components/forms/add-estimation-form.6.component';
import AddEstimationForm7 from '../components/forms/add-estimation-form.7.component';
import AddEstimationForm8 from '../components/forms/add-estimation-form.8.component';
import AddEstimationForm9 from '../components/forms/add-estimation-form.9.component';
import EstimationInvoice from '../components/estimation-invoice/estimation.invoice.component';
import StepWizard from 'react-step-wizard';

function AddEstimationWizard(props) {
    const rate = 225;

    return (
        <StepWizard initialStep={1}>
            <AddEstimationForm1 stepName={"initialDetails"} />
            <AddEstimationForm2 stepName={"applicationType"} />
            <AddEstimationForm3 stepName={"applicationType"} />
            <AddEstimationForm4 stepName={"applicationType"} />
            <AddEstimationForm5 stepName={"applicationType"} />
            <AddEstimationForm6 stepName={"applicationType"} />
            <AddEstimationForm7 stepName={"applicationType"} />
            <AddEstimationForm8 stepName={"applicationType"} />
            <AddEstimationForm9 stepName={"applicationType"} />
        </StepWizard>
    )
}

export default AddEstimationWizard;