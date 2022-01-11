import React from 'react';
import { Table } from 'react-bootstrap';
import EstimationTableRow from './estimation-table.row.component';
import { CurrentEstimationTotalCost } from '../../context/currentEstimationTotal.context';

function EstimationInvoice(props) {
    let finalCost = 0;
    let featureCost = 0
    let totalCost = props.getTotalCost();
    const miscInvoiceFields = [
        {
            "item": "User Content Storage",
            "description": "Storing content and verbiage for client management (CMS)",
            "hours": props.estimation.UserContentStorage,
            "required": true,
            "category": [1, 2, 3, 4, 5]
        },
        {
            "item": "Media Management",
            "description": "Storing images and videos for client management (CMS)",
            "hours": props.estimation.formUserMediaMgmt,
            "required": true,
            "category": [1, 2, 3, 4, 5]
        },
        {
            "item": "Application Start",
            "description": "New or existing project",
            "hours": props.estimation.newOrExistingProject,
            "required": true,
            "category": [1, 2, 3, 4, 5]
        },
        {
            "item": "Media Sharing",
            "description": "Users can share content with others",
            "hours": props.estimation.mediaSharingHours,
            "required": true,
            "category": [1, 2, 3, 4, 5]
        },
        {
            "item": "Content Update Frequency",
            "description": "Frequency of content updates",
            "hours": props.estimation.contentUpdateFrequency,
            "required": true,
            "category": [1, 2, 3, 4, 5]
        },
        {
            "item": "Image and Media Caching",
            "description": "Image and Media optimization and caching",
            "hours": props.estimation.imageCachingHours,
            "required": true,
            "category": [1, 2, 3, 4, 5]
        }
    ]
    let requirements = [
        props.estimation.views,
        props.estimation.general_estimate_features,
        props.estimation.capabilities,
        props.estimation.media,
        props.estimation.build_automation,
        props.estimation.quality_testing,
        props.estimation.security,
        props.estimation.data,
        miscInvoiceFields
    ]

    requirements.forEach(requirement =>
        requirement.map(field => {
            if (field.required === true) {
                featureCost += (field.hours * props.rate)
                totalCost += (field.hours * props.rate);
            }
        })
    );
    finalCost = totalCost;
    props.updateTotalCost(finalCost);

    return (
        <CurrentEstimationTotalCost.Consumer>
            {({ totalCost }) => (
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
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.views.filter(view => view.required === true)} />

                        <tr>
                            <td>Generic Features</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.general_estimate_features.filter(view => view.required === true)} />

                        <tr>
                            <td>Native Capabilities</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.capabilities.filter(view => view.required === true)} />

                        <tr>
                            <td>Media</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.media.filter(view => view.required === true)} />

                        <tr>
                            <td>Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.data.filter(view => view.required === true)} />

                        <tr>
                            <td>Build & Test Automtion</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.build_automation.filter(view => view.required === true)} />

                        <tr>
                            <td>Security</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={props.estimation.security.filter(view => view.required === true)} />

                        <tr>
                            <td>Misc</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <EstimationTableRow updateTotalCost={props.updateTotalCost} totalCost={props.totalCost} rate={props.rate} dataField={miscInvoiceFields.filter(view => view.required === true)} />

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