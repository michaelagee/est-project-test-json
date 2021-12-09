import React from 'react';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'
import InlineCheckBoxes from '../add-estimation/inlineCheckBox.component';

function AddEstimationForm6(props) {
    const socialMediaPlatforms = ["Facebook", "Instagram", "Google"]
    return (
        <Form>
            <h4>Social & Communication</h4>
            <p>These fields determine the projects social media and sharing capabilities.</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="socialMediaIntegration">
                    {/* <FloatingLabel controlId="floatingTextarea" label="Which social platforms are you interested in integrating with?" className="mb-3">
                        <Form.Control as="textarea" placeholder="Facebook, Instagram, TikTok, etc" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Additional Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Facebook, Instagram, TikTok, etc"
                            style={{ height: '100px' }}
                            value={props.formValues.socialMediaIntegration}
                            onChange={props.handleChange}
                        />
                    </FloatingLabel> */}
                    <InlineCheckBoxes
                        objectField={socialMediaPlatforms}
                        value={props.formValues.socialMediaIntegration}
                        checked={props.formValues.socialMediaIntegration}
                        onChange={props.handleChange} />
                </Form.Group>

            </Row>
            <Row>
                <Form.Group as={Col} controlId="contentUpdateFrequency">
                    <Form.Label>How often will the content be updated?</Form.Label>
                    <Form.Select
                        type="select"
                        name="contentUpdateFrequency"
                        value={props.formValues.contentUpdateFrequency}
                        onChange={props.handleChange}
                        defaultValue="Choose...">
                        <option>Choose...</option>
                        <option value={40}>Almost never</option>
                        <option value={50}>Occasionally</option>
                        <option value={60}>Often</option>
                        <option value={70}>Frequently</option>
                        <option value={100}>Daily</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="UserContentMgmt">
                    <Form.Label>Will users be able to upload or edit the content?</Form.Label>
                    <Form.Select
                        type="select"
                        name="UserContentMgmt"
                        value={props.formValues.UserContentMgmt}
                        onChange={props.handleChange}
                        defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Users with special permissions can</option>
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
                        <option value={125}>A certain amount of posts</option>
                        <option value={200}>Forever</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" id="contentSharing">
                    <Form.Check
                        type="checkbox"
                        name="contentSharing"
                        checked={props.formValues.contentSharing}
                        value={props.formValues.contentSharing}
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