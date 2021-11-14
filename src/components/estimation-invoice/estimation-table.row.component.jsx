import React from 'react';

function EstimationTableRow(props) {
    console.log(props, "table row props");
    return (
        props.dataField.map((field) =>
            <tr key={`table=row${field}`}>
                <td></td>
                <td>{field.item}</td>
                <td>{field.description}</td>
                <td>{field.hours}</td>
                <td>{props.rate}</td>
                <td>{field.hours * props.rate}</td>
            </tr>
        ))
}

export default EstimationTableRow;