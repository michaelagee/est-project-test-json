import React from 'react';
import { EstimationListItem } from '../estimation-list-item/estimation-list-item.component';
import './estimation-block.styles.css';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Button, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

const EstimationBlock = (props) => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <ListGroup className="dashboard-list-group">
                {props.estimations.map(estimation => (
                    <ListGroup.Item
                        key={estimation.id}
                        action onClick={props.listItemClick}
                        onClick={handleShow}
                        // onClick={() => navigate(`/estimations/${estimation.id}`)}
                        key={estimation.id}>
                        {estimation.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};

export default EstimationBlock;