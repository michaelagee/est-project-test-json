import React from 'react';
import { Table } from 'react-bootstrap';
import EstimationTableRow from './estimation-table.row.component';
import { CurrentEstimationTotalCost } from '../../context/currentEstimationTotal.context';

function EstimationInvoice(props) {
    let finalCost = 0;
    let requirements = [props.estimation.views, props.estimation.general_estimate_features, props.estimation.capabilities, props.estimation.media]
    let featureCost = 0
    let totalCost = props.getTotalCost();

    requirements.forEach(requirement =>
        requirement.map(field => {
            featureCost += (field.hours * props.rate)

            totalCost += (field.hours * props.rate);
            console.log('name', field.item, 'hours: ', field.hours, 'totalCost', (field.hours * props.rate), 'totalCost: ', totalCost);
        }));
finalCost = totalCost;
        props.updateTotalCost(totalCost);
    return (
        <CurrentEstimationTotalCost.Consumer>
            {({totalCost}) => (
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
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.views} />

                        <tr>
                            <td>Generic Features</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.general_estimate_features} />

                        <tr>
                            <td>Native Capabilities</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.capabilities} />

                        <tr>
                            <td>Media</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.media} />

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total: ${finalCost}</td>
                        </tr>

                    </tbody>
                </Table>
            )}
        </CurrentEstimationTotalCost.Consumer>
    )
}

export default EstimationInvoice;