import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddEstimationForm3(props) {
    return (
        <>
        {/* This entire form can go away based on form 2, these are auto baked in based on logins */}
            <h3>User Profile Management</h3>
            <Form>
                <Row className="mb-3">
                    <Form.Group className="mb-3" id="userMgmtFormHotState">
                        <Form.Check
                            type="checkbox"
                            name="userHotState"
                            checked={props.formValues.userHotState}
                            defaultValue={props.estimation.userHotState}
                            onChange={props.handleChange}
                            label="Will your users need to login to interact with the application?" />
                    </Form.Group>

                    <Form.Group className="mb-3" id="userMgmtSocialLogin">
                        <Form.Check
                            type="checkbox"
                            name="userSocialLoginOrRegistration"
                            checked={props.formValues.userSocialLoginOrRegistration}
                            onChange={props.handleChange}
                            defaultValue={props.estimation.userSocialLoginOrRegistration}
                            label="Will users be able to register or login with social media accounts?" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" id="userMgmtFormProfile">
                        <Form.Check
                            type="checkbox"
                            name="userProfileRequired"
                            checked={props.formValues.userProfileRequired}
                            onChange={props.handleChange}
                            defaultValue={props.estimation.userProfileRequired}
                            label="Will users be able to manage or update their profile?" />
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