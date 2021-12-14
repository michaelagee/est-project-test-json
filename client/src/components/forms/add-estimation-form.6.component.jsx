import React from 'react';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'
import InlineCheckBoxes from '../add-estimation/inlineCheckBox.component';

function AddEstimationForm6(props) {
    console.log('form props', props)
    const socialMediaPlatforms = ["Facebook", "Instagram", "Google"]
    return (
        <Form>
            <h4>Social & Communication</h4>
            <p>These fields determine the projects social media and sharing capabilities.</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="socialMediaIntegration">
                    <FloatingLabel controlId="floatingTextarea" label="Which social platforms are you interested in integrating with?" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Facebook, Instagram, TikTok, etc"
                            defaultValue={props.estimation.socialMediaIntegration || 'Facebook, Google, Apple'}
                            onChange={props.handleChange}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Additional Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Facebook, Instagram, TikTok, etc"
                            style={{ height: '100px' }}
                            value={props.formValues.socialAdditionalComments}
                            onChange={props.handleChange}
                        />
                    </FloatingLabel>
                    {/* <InlineCheckBoxes
                        objectField={socialMediaPlatforms}
                        estimation={props.estimation}
                        onChange={props.handleChange} /> */}
                </Form.Group>

            </Row>
            <Row>
                <Form.Group as={Col} controlId="socialContentUpdateFrequency">
                    <Form.Label>How often will the content be updated?</Form.Label>
                    <Form.Select
                        type="select"
                        name="socialContentUpdateFrequency"
                        value={props.formValues.socialContentUpdateFrequency}
                        defaultValue={props.estimation.socialContentUpdateFrequency || "Choose..."}
                        onChange={props.handleChange}
                    >
                        <option label={"Almost never"} value={40}>Almost never</option>
                        <option label={"Occasionally"} value={80}>Occasionally</option>
                        <option label={"Often"} value={100}>Often</option>
                        <option label={"Frequently"} value={110}>Frequently</option>
                        <option label={"Daily"} value={124}>Daily</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="socialContentMgmt">
                    <Form.Label>Will users be able to upload or edit the content?</Form.Label>
                    <Form.Select
                        type="select"
                        name="socialContentMgmt"
                        value={props.formValues.socialContentMgmt}
                        defaultValue={props.estimation.socialContentManagement || "Choose..."}
                        onChange={props.handleChange}>
                        <option>Choose...</option>
                        <option label={"Yes"} value={100}>Yes</option>
                        <option label={"No"} value={40}>No</option>
                        <option label={"Users with special permissions can"} value={140}>Users with special permissions can</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="UserContentStoring">
                    <Form.Label>How long do you want users to be able to pull up content they've submitted?</Form.Label>
                    <Form.Select
                        type="select"
                        name="UserContentStorage"
                        value={props.formValues.UserContentStoring}
                        onChange={props.handleChange}
                        defaultValue="Choose...">
                        <option>Choose...</option>
                        <option label="A few weeks" value={100}>A few weeks</option>
                        <option label={"A certain amount of posts"} value={125}>A certain amount of posts</option>
                        <option label={"Forever"} value={200}>Forever</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" id="contentSharing">
                    <Form.Check
                        type="checkbox"
                        name="contentSharing"
                        checked={props.formValues.contentSharing}
                        onChange={props.handleChange}
                        defaultValue={props.formValues.contentSharing}
                        label="Can content be shared to other platforms?" />
                </Form.Group>
            </Row>


            <Button variant="primary" onClick={props.previousStep}>
                Previous Step
            </Button>

            <Button variant="primary" onClick={props.nextStep}>
                Calculate Estimate
            </Button>
        </Form>
    )
}

export default AddEstimationForm6;