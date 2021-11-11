import React from "react";
import './search.styles.css';
import { InputGroup } from "react-bootstrap";
import { FormControl, Button } from "react-bootstrap";

// TODO: Disable this on interior routes
const Search = ({ placeholder, handleChange, onSubmit, buttonTitle, count }) => {
    return (
        <form onSubmit={onSubmit} className="d-flex">
        <InputGroup className="mb-3">
            <FormControl
                className="me-2"
                placeholder={placeholder}
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={handleChange}
            />
            <Button variant="outline-success" type="Submit">
                {count > 0 ? "Search" : "Add New"}
            </Button>
        </InputGroup>
        </form>
    )
}

export default Search;