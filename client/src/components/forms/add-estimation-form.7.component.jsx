import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddEstimationForm7(props) {
    return (
        <Form>
            <h4>Images & Media</h4>
            <p>This includes product images, banners, and content posting images. Also take into consideration how often this content will be updated and by whom</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="geolocationRequirement">
                    <Form.Label>Who will be managing the images and video content?</Form.Label>
                    <Form.Select
                        type="select"
                        name="geolocationRequirement"
                        value={props.formValues.geolocationRequirement}
                        onChange={props.handleChange}
                        defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>West Cary Group</option>
                        <option>Client</option>
                        <option>3rd party service or vendor</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="mediaUpdateFrequency">
                    <Form.Label>How often will the content be updated?</Form.Label>
                    <Form.Select
                        type="select"
                        name="mediaUpdateFrequency"
                        value={props.formValues.mediaUpdateFrequency}
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
                <Form.Group as={Col} controlId="formUserMediaMgmt">
                    <Form.Label>Will users be able to upload or edit media?</Form.Label>
                    <Form.Select
                        type="select"
                        name="formUserMediaMgmt"
                        value={props.formValues.formUserMediaMgmt}
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
                <Form.Group className="mb-3" id="change">
                    <Form.Check
                        type="checkbox"
                        name="change"
                        checked={props.formValues.change}
                        value={props.formValues.change}
                        onChange={props.handleChange}
                        defaultValue={props.formValues.change}
                        label="Will users be able to share images or videos with others?" />
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

export default AddEstimationForm7;