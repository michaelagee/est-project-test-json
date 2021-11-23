import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { applicationPlatforms, mobileApplicationTypes } from '../../constants/application-types';

function AddEstimationForm2(props) {

    let platforms = applicationPlatforms.map((appPlatform) => <option>{appPlatform}</option>);
    let mobileAppTypes = mobileApplicationTypes.map((mobileAppType) => <option>{mobileAppType}</option>);

    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formWebOrMobile">
                    <Form.Label>Web or Mobile?</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option></option>
                        { platforms }
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formApplicationType">
                    <Form.Label>Application Type (What kind of project is it?)</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        { mobileAppTypes }
                    </Form.Select>
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