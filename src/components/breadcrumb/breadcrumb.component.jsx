import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadCrumb = (props) => {

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadCrumb;