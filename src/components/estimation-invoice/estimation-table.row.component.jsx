import React from 'react';

function EstimationTableRow(props) {
    let iterator = 0
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