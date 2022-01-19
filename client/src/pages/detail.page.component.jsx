import React, { useState } from 'react';
import form, { FormContext } from '../context/Form.context';
import AddEstimationForm1 from '../components/forms/add-estimation-form.1.component';
import AddEstimationForm2 from '../components/forms/add-estimation-form.2.component';
import AddEstimationForm4 from '../components/forms/add-estimation-form.4.component';
import AddEstimationForm6 from '../components/forms/add-estimation-form.6.component';
import AddEstimationForm9 from '../components/forms/add-estimation-form.9.component';
import StepWizard from 'react-step-wizard';
import axios from "axios";

function AddEstimationWizard(props) {
    const rate = 225;
    let requirements = [
        props.estimation.views,
        props.estimation.general_estimate_features,
        props.estimation.capabilities,
        props.estimation.media]
    let itemsToBeRequiredForEstimate = [];
    const [form, setForm] = useState({
        ...props.estimation
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...form,
            [name]: value
        };

        requirements.forEach(requirement => {
            requirement.forEach(item => item.required = false)
            itemsToBeRequiredForEstimate = requirement.filter(field => field.category.includes(parseInt(e.target.value)))
            itemsToBeRequiredForEstimate.forEach(item => item.required = true)
        });

        if (e.target.type === 'checkbox') {
            updatedForm[e.target.name] = e.target.checked;
            updatedForm[e.target.name + "Hours"] = e.target.defaultValue
        } else {
            updatedForm[e.target.name] = e.target.value;
        }
        console.log('form updated: ', updatedForm);
        setForm(form => {
            return { ...form, ...updatedForm }
        });
        setForm(updatedForm)
        props.updateEstimation(updatedForm)
    }

    const onStepChange = (currentStep, started, completed) => {
        const updatedFormProgress = {
            ...form
        };

        let latestStepCompleted = Math.max(updatedFormProgress.stepCompleted, currentStep.activeStep);
        updatedFormProgress.stepCompleted = latestStepCompleted
        setForm(updatedFormProgress)
        const url = "https://ej1wmnqenl.execute-api.us-east-1.amazonaws.com/dev/estimations";
        axios.post(url, updatedFormProgress).then((response) => {
            console.log('response from POST', JSON.parse(response.config.data));
        });
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
                    <AddEstimationForm4
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"media"} />
                    <AddEstimationForm6
                        formValues={form}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                    <AddEstimationForm9
                        formValues={form}
                        getTotalCost={props.getTotalCost}
                        totalCost={props.totalCost}
                        updateTotalCost={props.updateTotalCost}
                        estimation={props.estimation}
                        handleChange={handleChange}
                        stepName={"applicationType"} />
                </StepWizard>
            }
        </FormContext.Consumer >
    )
}

export default AddEstimationWizard;