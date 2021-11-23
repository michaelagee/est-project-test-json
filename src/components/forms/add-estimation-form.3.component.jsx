import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddEstimationForm3(props) {
    console.log(props, 'form 3 props')
    return (
        <>
            <h3>User Features & Session Management</h3>
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3" id="userMgmtFormHotState">
                        <Form.Check
                            type="checkbox"
                            name="userHotState"
                            checked={props.formValues.userHotState}
                            value={props.formValues.userHotState}
                            defaultValue={props.formValues.userHotState}
                            onChange={props.handleChange}
                            label="Will your users need to login to interact with the application?" />
                    </Form.Group>

                    <Form.Group className="mb-3" id="userMgmtFormHotState">
                        <Form.Check
                            type="checkbox"
                            name="userSocialLoginOrRegistration"
                            checked={props.formValues.userSocialLoginOrRegistration}
                            value={props.formValues.userSocialLoginOrRegistration}
                            onChange={props.handleChange}
                            defaultValue={props.formValues.userSocialLoginOrRegistration}
                            label="Will users be able to register or login with social media accounts?" />
                    </Form.Group>
                </Row>

                <Button variant="primary" onClick={props.previousStep}>
                    Previous Step
                </Button>

                <Button variant="primary" onClick={props.nextStep}>
                    Next Step
                </Button>
            </Form>
        </>
    )
}

export default AddEstimationForm3;