import { InputGroup, FormControl, Button } from 'react-bootstrap';
import React, { Component, ReactDOM } from 'react';

export const EstimationNameInputGroup = (props) => (

    <form onSubmit={props.handleSubmit}>
        {/* <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <br /> */}
        <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Estimation Name</InputGroup.Text>
            <FormControl
                aria-label="Estimation Project Name"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Estimation Project Name"
            />
            <Button variant="outline-secondary" id="button-addon2" type="submit" value="Submit">
                Add New Estimation
            </Button>
        </InputGroup>
        {/* <br />
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup> */}
    </form>


)