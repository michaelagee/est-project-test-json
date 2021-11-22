import React, { useState, useContext } from 'react';
import form, { FormContext } from '../context/Form.context';
import AddEstimationForm1 from '../components/forms/add-estimation-form.1.component';
import AddEstimationForm2 from '../components/forms/add-estimation-form.2.component';
import AddEstimationForm3 from '../components/forms/add-estimation-form.3.component';
import AddEstimationForm4 from '../components/forms/add-estimation-form.4.component';
import AddEstimationForm5 from '../components/forms/add-estimation-form.5.component';
import AddEstimationForm6 from '../components/forms/add-estimation-form.6.component';
import AddEstimationForm7 from '../components/forms/add-estimation-form.7.component';
import AddEstimationForm8 from '../components/forms/add-estimation-form.8.component';
import AddEstimationForm9 from '../components/forms/add-estimation-form.9.component';
import StepWizard from 'react-step-wizard';

function AddEstimationWizard(props) {
    const rate = 225;

    const [form, setForm] = useState({
        projectName: '',
        clientName: '',
        authorName: '',
        clientAddress: ''
    });
    // const [estimationName, updateEstimationName] = useState(props.estimation.name);
    // const { name, updateName } = useContext(FormContext)
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...form,
            [name]: value
        };
        updatedForm[e.target.name] = e.target.value;
        // currentFieldValue = e.target.value
        console.log('form updated: ', form);

        setForm(updatedForm);
    }

    return (
        <FormContext.Consumer>
        {({form}) =>
        < StepWizard initialStep={1} >
            <AddEstimationForm1
                formValues={form}
                estimation={props.estimation}
                handleChange={handleChange}
                stepName={"initialDetails"} />
            <AddEstimationForm2 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm3 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm4 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm5 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm6 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm7 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm8 handleChange={handleChange} stepName={"applicationType"} />
            <AddEstimationForm9 handleChange={handleChange} stepName={"applicationType"} />
        </StepWizard>
        }
        </FormContext.Consumer >
    )
}

export default AddEstimationWizard;