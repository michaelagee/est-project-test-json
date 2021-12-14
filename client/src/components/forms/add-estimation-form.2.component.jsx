import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { applicationPlatforms, mobileApplicationTypes, applicationCategories } from '../../constants/application-types';

function AddEstimationForm2(props) {

    let platforms = applicationPlatforms.map((appPlatform) => <option key={`${appPlatform}-${appPlatform.hours}`} value={appPlatform.hours}>{appPlatform.platform}</option>);
    let mobileAppTypes = mobileApplicationTypes.map(
        (mobileAppType) => <option value={mobileAppType.categoryType} key={mobileAppType.categoryName}>{mobileAppType.categoryName}</option>);

    return (
        <Form>
            <h4>Application Type, Build Automation & Quality Control</h4>
            <p>User analytics, google firebase crash reporting and build automation are included in all application estimates</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNewOrExisting">
                    <Form.Label>Is this a new or existing application?</Form.Label>
                    <Form.Select
                        type="select"
                        name="newOrExistingProject"
                        onChange={props.handleChange}
                        defaultValue={props.estimation.newOrExistingProject || "Choose..."}
                    >
                        <option>Choose...</option>
                        <option label={"New"} value={40}>New</option>
                        <option label={"Existing"} value={90}>Existing</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="platform">
                    <Form.Label>Web or Mobile?</Form.Label>
                    <Form.Select
                        name="platform"
                        defaultValue={props.estimation.platform || "Choose..."}
                        onChange={props.handleChange}
                    >
                        {platforms}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="applicationType">
                    <Form.Label>Application Type (What kind of application is it?)</Form.Label>
                    <Form.Select
                        defaultValue={props.estimation.applicationType || "Choose..."}
                        name="applicationType"
                        onChange={props.handleChange}>
                        {mobileAppTypes}
                    </Form.Select>
                </Form.Group>
            </Row>

            {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formApplicationType">
                    <Form.Label>Do users need to login to the application?</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>

                    </Form.Select>
                </Form.Group>
            </Row> */}

            {/* These below need to be included in the estimate, but not necessary for the customer
            to choose because they are inherent to the project */}

            {/* <Row className="mb-3">

                <Form.Group className="mb-3" id="automatedBuilds">
                    <Form.Check
                        type="checkbox"
                        name="automatedBuilds"
                        checked={props.formValues.automatedBuilds}
                        value={props.formValues.automatedBuilds}
                        onChange={props.handleChange}
                        defaultValue={props.formValues.automatedBuilds}
                        label="Will the project need automated builds?" />
                </Form.Group>

                <Form.Group className="mb-3" id="projectAnalytics">
                    <Form.Check
                        type="checkbox"
                        name="projectAnalytics"
                        checked={props.formValues.projectAnalytics}
                        value={props.formValues.projectAnalytics}
                        onChange={props.handleChange}
                        defaultValue={props.formValues.projectAnalytics}
                        label="Will the project need performance or user tracking analytics?" />
                </Form.Group>

                <Form.Group className="mb-3" id="projectCrashReporting">
                    <Form.Check
                        type="checkbox"
                        name="projectCrashReporting"
                        checked={props.formValues.projectCrashReporting}
                        value={props.formValues.projectCrashReporting}
                        onChange={props.handleChange}
                        defaultValue={props.formValues.projectCrashReporting}
                        label="Will the project need crash reporting?" />
                </Form.Group>
            </Row> */}


            <Button variant="primary" onClick={props.previousStep}>
                Previous Step
            </Button>
            <br />
            <Button variant="primary" onClick={props.nextStep}>
                Next Step
            </Button>
        </Form>
    )
}

export default AddEstimationForm2;