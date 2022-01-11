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
                value={field}
                checked={props.estimation + `${field}`}
                onChange={props.onChange}
                type="checkbox"
                id={`inline-checkbox-${field}`}
            />
        ))
}

export default InlineCheckBoxes