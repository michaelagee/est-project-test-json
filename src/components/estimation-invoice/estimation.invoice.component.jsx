import React from 'react';
import { Table } from 'react-bootstrap';
import EstimationTableRow from './estimation-table.row.component';

function EstimationInvoice(props) {

    console.log(props, "invoice props");
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Function</th>
                    <th>Description</th>
                    <th>Hours</th>
                    <th>Rate</th>

                    <th>Line Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Views</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <EstimationTableRow totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.views} />

                <tr>
                    <td>Generic Features</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <EstimationTableRow totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.general_estimate_features} />
                
                <tr>
                    <td>Native Capabilities</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <EstimationTableRow totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.capabilities} />
                
                <tr>
                    <td>Media</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <EstimationTableRow totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.capabilities} />


            </tbody>
        </Table>
    )
}

export default EstimationInvoice;