import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddEstimationForm5(props) {
    return (
        <Form>
            <h4>Content Management</h4>
            <p>Use this to estimate how content (verbiage) will be managed, who will manage it, and how frequent it will be updated.</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="contentManagement">
                    <Form.Label>Who will be managing the verbiage & 
                         content?</Form.Label>
                    <Form.Select
                        type="select"
                        name="contentManagement"
                        value={props.formValues.contentManagement}
                        onChange={props.handleChange}
                        defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>West Cary Group</option>
                        <option>Client</option>
                        <option>3rd party service or vendor</option>
                    </Form.Select>
                </Form.Group>

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
                        label="Will users be able to share posts or content with others?" />
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

export default AddEstimationForm5;