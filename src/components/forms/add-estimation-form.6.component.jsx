import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddEstimationForm2(props) {
    return (
        <Form>
            <h1>Form 6</h1>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Rage Name</Form.Label>
                    <Form.Control type="input" placeholder="Enter a Project Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Button variant="primary" onClick={props.previousStep}>
                Previous Step
            </Button>

            <Button variant="primary" onClick={props.nextStep}>
                Next Step
            </Button>
        </Form>
    )
}

export default AddEstimationForm2;