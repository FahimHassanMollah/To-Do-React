import React from 'react';
import { Button, Col, ListGroupItem, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWindowClose } from '@fortawesome/free-solid-svg-icons'
const ToDoList = (props) => {
    return (
        <div className="">
            <Row className="pt-2">
                <Col md={2} xs={2}>
                    <Button onClick={()=>props.deleteListHandler(props.listItem)} variant={props.color} className="py-2 px-2"> <span> <FontAwesomeIcon size="lg" icon={faWindowClose} /></span></Button>
                </Col>
                <Col md={10} xs={10}>
                    <ListGroupItem className="py-2 px-2" variant={props.color}>
                        {props.list}
                    </ListGroupItem>
                </Col>
            </Row>
        </div>
    );
};
export default ToDoList;