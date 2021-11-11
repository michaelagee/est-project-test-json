import React from "react";
import './search.styles.css';
import { InputGroup } from "react-bootstrap";
import { FormControl, Button } from "react-bootstrap";

// TODO: Disable this on interior routes
const Search = ({ placeholder, handleChange, onPress, buttonTitle }) => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                className="me-2"
                placeholder={placeholder}
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={handleChange}
            />
            <Button variant="outline-success">
                {buttonTitle}
            </Button>
        </InputGroup>
    )
}

export default Search;