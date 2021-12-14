import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddEstimationForm4(props) {
    return (
        <Form>
            <h4>Images & Media</h4>
            <p>This includes product images, banners, and content posting images. Also take into consideration how often this content will be updated and by whom. This will determine the CMS structure.</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formMediaMgmt">
                    <Form.Label>Will this application require dynamic image/video updates?</Form.Label>
                    <Form.Select
                        type="select"
                        name="dynamicMediaUpdates"
                        value={props.formValues.formMediaMgmt}
                        onChange={props.handleChange}
                        defaultValue={props.estimation.formMediaMgmt || "Choose..."}>
                        <option label={"Yes"} value={20}>Yes</option>
                        <option label={"No"} value={8}>No</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="mediaUpdateFrequency">
                    <Form.Label>How often will the media content need to be updated?</Form.Label>
                    <Form.Select
                        type="select"
                        name="mediaUpdateFrequency"
                        defaultValue={props.estimation.mediaUpdateFrequency || "Choose..."}
                        value={props.formValues.mediaUpdateFrequency}
                        onChange={props.handleChange}>
                        <option label={"Almost never"} value={4}>Almost never</option>
                        <option label={"Occasionally"} value={8}>Occasionally</option>
                        <option label={"Often"} value={10}>Often</option>
                        <option label={"Frequently"} value={16}>Frequently</option>
                        <option label={"Daily"} value={24}>Daily</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formUserMediaMgmt">
                    <Form.Label>Will the client/customer be able to update their own images/videos?</Form.Label>
                    <Form.Select
                        type="select"
                        name="formUserMediaMgmt"
                        value={props.formValues.formUserMediaMgmt}
                        onChange={props.handleChange}
                        defaultValue={props.estimation.formUserMediaMgmt || "Choose..."}>
                        <option label={"Yes"} value={75}>Yes</option>
                        <option value={125}>No</option>
                        <option value={160}>Users with special permissions can</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" id="mediaSharing">
                    <Form.Check
                        type="checkbox"
                        name="mediaSharing"
                        checked={props.estimation.mediaSharing}
                        onChange={props.handleChange}
                        defaultValue={props.estimation.mediaSharing}
                        label="Will users be able to share images or videos with others?" />
                </Form.Group>

                <Form.Group className="mb-3" id="imageCaching">
                    <Form.Check
                        type="checkbox"
                        name="imageCaching"
                        checked={props.estimation.imageCaching}
                        onChange={props.handleChange}
                        defaultValue={props.estimation.imageCaching}
                        label="Will the project require image caching?" />
                </Form.Group>
            </Row>

            <h4>Content Management</h4>
            <p>Use this to estimate how content (verbiage) will be managed, who will manage it, and how frequent it will be updated.</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="contentManagement">
                    <Form.Label>Who will be managing the verbiage &
                        content?</Form.Label>
                    <Form.Select
                        type="select"
                        name="contentManagement"
                        onChange={props.handleChange}
                        defaultValue={props.estimation.contentManagement || "Choose..."}>
                        <option value={40}>West Cary Group</option>
                        <option value={8}>Client</option>
                        <option value={4}>3rd party service or vendor</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="contentUpdateFrequency">
                    <Form.Label>How often will the content be updated?</Form.Label>
                    <Form.Select
                        type="select"
                        name="contentUpdateFrequency"
                        onChange={props.handleChange}
                        defaultValue={props.estimation.contentUpdateFrequency || "Choose..."}>
                        <option label={"Almost never"} value={4}>Almost never</option>
                        <option label={"Occasionally"} value={8}>Occasionally</option>
                        <option label={"Often"} value={10}>Often</option>
                        <option label={"Frequently"} value={16}>Frequently</option>
                        <option label={"Daily"} value={24}>Daily</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="UserContentMgmt">
                    <Form.Label>Will users be able to upload or edit the content?</Form.Label>
                    <Form.Select
                        type="select"
                        name="UserContentMgmt"
                        onChange={props.handleChange}
                        defaultValue={props.estimation.UserContentMgmt || "Choose..."}>
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
                        checked={props.estimation.contentSharing}
                        value={props.estimation.contentSharing}
                        onChange={props.handleChange}
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

export default AddEstimationForm4;