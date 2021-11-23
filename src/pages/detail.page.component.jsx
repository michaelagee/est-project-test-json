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
import { InitialFormValues } from '../components/forms/form.initial-values';

function AddEstimationWizard(props) {
    const rate = 225;

    const [form, setForm] = useState({
        ...InitialFormValues
    });
    // const [estimationName, updateEstimationName] = useState(props.estimation.name);
    // const { name, updateName } = useContext(FormContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...form,
            [name]: value
        };
        console.log(e, 'target')
        if (e.target.type === 'checkbox') {
            console.log('we have a checkbox captain')
            updatedForm[e.target.name] = e.target.checked;
        } else {
            updatedForm[e.target.name] = e.target.value;
        }
        // currentFieldValue = e.target.value
        console.log('form updated: ', updatedForm);

        setForm(updatedForm);
    }

    const onStepChange = (currentStep, started, completed) => {

        const updatedFormProgress = {
            ...form
        };
        console.log(currentStep.activeStep, 'currentStep')
        let latestStepCompleted = Math.max(updatedFormProgress.stepCompleted, currentStep.activeStep);
        // updatedFormProgress.stepCompleted.push(latestStepCompleted)
        updatedFormProgress.stepCompleted = latestStepCompleted
        setForm(updatedFormProgress)
        console.log('formProgressUpdated', updatedFormProgress);
    }

    return (
        <FormContext.Consumer>
            {({ form }) =>
                < StepWizard onStepChange={onStepChange} initialStep={1} >
                    <AddEstimationForm1
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"initialDetails"} />
                    <AddEstimationForm2
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm3
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"userManagement"} />
                    <AddEstimationForm4
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm5
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm6
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm7
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm8
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm9
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                </StepWizard>
            }
        </FormContext.Consumer >
    )
}

export default AddEstimationWizard;