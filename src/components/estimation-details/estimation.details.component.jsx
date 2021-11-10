import React, { useEffect, useState } from 'react';

const EstimationDetails = (props) => {

    console.log("props", props);
    let estimationId = props.estimationDetailsId;
    console.log(estimationId);
    const [estimation, setEstimation] = useState([]);
    let API_URL = "";
    
    useEffect(() => {
        fetchData();
        API_URL = 'http://localhost:3001/estimations/' + estimationId;
        console.log("estimation: ", estimation);
    }, []);

    const fetchData = async () => {
        console.log(API_URL);
        const response = await fetch(API_URL);
        console.log(response);
        const data = await response.json();
        setEstimation(data);
        console.log(data);
        // fetch('http://localhost:3001/estimations/' + estimationId )
        // .then(response => response.json())
        // .then(estimation => setEstimation(estimation));

    };
    
    return (
        <p>{estimationId}</p>
    )
}

export default EstimationDetails;