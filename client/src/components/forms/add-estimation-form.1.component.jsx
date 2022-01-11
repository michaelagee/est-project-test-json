import React, { useContext, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { states } from '../../constants/states';


function AddEstimationForm1(props) {
    let stateAbreviations = states.map((state) => <option key={state}>{state}</option>);

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="form-1-project-name">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={props.formValues.projectName}
                        onChange={props.handleChange}
                        placeholder={props.estimation.name}
                        defaultValue={props.estimation.name} />
                </Form.Group>

                <Form.Group as={Col} controlId="form1-client-name">
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="clientName"
                        value={props.formValues.clientName}
                        onChange={props.handleChange}
                        defaultValue={props.estimation.clientName}
                        placeholder="The Clients Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="form1-estimation-author-name">
                    <Form.Label>Estimation Author Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="authorName"
                        value={props.formValues.authorName}
                        onChange={props.handleChange}
                        defaultValue={props.estimation.authorName}
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
                    defaultValue="5 W Cary St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Client Address 2</Form.Label>
                <Form.Control
                    type="text"
                    name="clientAddress2"
                    value={props.formValues.clientAddress2}
                    onChange={props.handleChange}
                    placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        name="clientAddressCity"
                        placeholder="Richmond"
                        defaultValue="Richmond"
                        value={props.formValues.clientAddressCity}
                        onChange={props.handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select
                        type="select"
                        name="clientAddressState"
                        value={props.formValues.clientAddressState}
                        onChange={props.handleChange}
                        defaultValue="VA">
                        <option>Choose...</option>
                        {stateAbreviations}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                        type="text"
                        name="clientAddressZip"
                        placeholder="23320"
                        defaultValue="23320"
                        value={props.formValues.clientAddressZip}
                        onChange={props.handleChange}
                    />
                </Form.Group>
            </Row>

            <Button variant="primary" onClick={props.nextStep}>
                Next Step
            </Button>
        </Form>
    )
}

export default AddEstimationForm1;