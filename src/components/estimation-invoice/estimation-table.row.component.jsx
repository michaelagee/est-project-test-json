import React from 'react';

function EstimationTableRow(props) {

    let subTotal = props.totalCost;
    let featureCost = 0
    let totalHours = 0
    let iterator = 0
    let total = 0

    props.dataField.map(field => {

        featureCost += (field.hours * props.rate)
        // total += featureCost
        totalHours += field.hours
        total += totalHours
    });

    console.log(featureCost, "FEATURECOST");
    console.log(total, "TOTAL");
    return (
        props.dataField.map((field) =>
            <tr key={`${field}-table-row-${iterator++}`}>
                <td key={`${field}-${iterator++}`}></td>
                <td key={`${field}-${iterator++}`}>{field.item}</td>
                <td key={`${field}-${iterator++}`}>{field.description}</td>
                <td key={`${field}-${iterator++}`}>{field.hours}</td>
                <td key={`${field}-${iterator++}`}>{props.rate}</td>
                <td key={`${field}-${iterator++}`}>{field.hours * props.rate} </td>
            </tr>
        ))
}

export default EstimationTableRow;