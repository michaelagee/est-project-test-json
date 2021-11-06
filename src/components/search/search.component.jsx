import React from "react";
import './search.styles.css';

const Search = ({ placeholder, handleChange }) => {
    return (
        <input
            className='search'
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Search;