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
import { InitialFormValues } from '../components/forms/initialValues/form.initial-values';

function AddEstimationWizard(props) {
    // console.log(props, 'detail page props')
    const rate = 225;

    const [form, setForm] = useState({
        ...props.estimation
    });

    // console.log('the form', form);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = {
            ...form,
            [name]: value
        };

        console.log(updatedForm, 'updatedForm')
        // let updateForm2 = {...props.estimation}
        // console.log('updated form 2 : ', updateForm2, e.target.value)

        if (e.target.type === 'checkbox') {
            console.log(e)
            updatedForm[e.target.name] = e.target.checked;
            updatedForm[e.target.name + "Hours"] = e.target.defaultValue
        } else {
            console.log(e)
            updatedForm[e.target.name] = e.target.value;
        }
        console.log('form updated: ', updatedForm);
        setForm(updatedForm);
        props.updateEstimation(updatedForm)
    }

    const onStepChange = (currentStep, started, completed) => {
        const updatedFormProgress = {
            ...form
        };

        let latestStepCompleted = Math.max(updatedFormProgress.stepCompleted, currentStep.activeStep);
        updatedFormProgress.stepCompleted = latestStepCompleted
        setForm(updatedFormProgress)
        console.log('formProgressUpdated', updatedFormProgress);

        // const response = fetch("http://localhost:1020/estimations", {
        //     method: "POST",
        //     mode: "cors",
        //     cache: "no-cache",
        //     credentials: "same-origin",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     redirect: "follow",
        //     referrerPolicy: "no-referrer",
        //     body: JSON.stringify({ estimations: updatedFormProgress }),
        // });

        // const body = response.json();

        // if (response.status !== 200) {
        //     throw Error(body.message);
        // }
        // console.log(body, "body");
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
                        stepName={"media"} />
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