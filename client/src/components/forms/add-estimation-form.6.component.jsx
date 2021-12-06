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
                        <option>Almost never</option>
                        <option>Occasionally</option>
                        <option>Often</option>
                        <option>Frequently</option>
                        <option>Daily</option>
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
                Next Step
            </Button>
        </Form>
    )
}

export default AddEstimationForm6;