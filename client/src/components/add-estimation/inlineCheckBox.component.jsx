import React from 'react';
import { Form } from 'react-bootstrap';


function InlineCheckBoxes(props) {

    return (
        props.objectField.map((field) =>
            <Form.Check
                inline
                name={props.name}
                key={`inline-checkbox-${field}`}
                label={field}
                value={props.value}
                checked={props.formValues}
                onChange={props.handleChange}
                type="checkbox"
                id={`inline-checkbox-${field}`}
            />
        ))
}

export default InlineCheckBoxes