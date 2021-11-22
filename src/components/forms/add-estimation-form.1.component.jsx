import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { states } from '../../constants/states';


function AddEstimationForm1(props) {
    console.log(props, 'form 1 props')
    let stateAbreviations = states.map((state) => <option key={state}>{state}</option>);

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="form-1-project-name">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="projectName"
                        value={props.formValues.projectName}
                        onChange={props.handleChange}
                        placeholder='random shite' />
                </Form.Group>

                <Form.Group as={Col} controlId="form1-client-name">
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="clientName"
                        value={props.formValues.clientName}
                        onChange={props.handleChange}
                        placeholder="The Clients Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="form1-estimation-author-name">
                    <Form.Label>Estimation Author Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="authorName"
                        value={props.formValues.authorName}
                        onChange={props.handleChange}
                        placeholder="Your Name" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="form1-client-address">
                <Form.Label>Client Address</Form.Label>
                <Form.Control
                    type="text"
                    name="clientAddress"
                    value={props.formValues.clientAddress}
                    onChange={props.handleChange}
                    placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Client Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        {stateAbreviations}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Did the client give a budget estimation?" />
            </Form.Group>

            <Button variant="primary" onClick={props.nextStep}>
                Next Step
            </Button>
        </Form>
    )
}

export default AddEstimationForm1;