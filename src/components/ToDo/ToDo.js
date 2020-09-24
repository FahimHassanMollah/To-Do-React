import React, { useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import ToDoList from '../ToDoList/ToDoList';
const ToDo = () => {
    const [item, setItem] = useState("")
    const [itemArray, setitemArray] = useState([])
    const [checker, setChecker] = useState(false)
    const colorArray = ["success", "dark", "info", "primary", "success", "dark", "info", "primary", "success", "dark", "info", "primary", "success", "dark", "info", "primary", "success", "dark", "info", "primary", "success", "dark", "info", "primary", "success", "dark", "info", "primary"]
    const inputItemHandler = (e) => {
        setItem(e.target.value)
        let value = e.target.value;
    }
    const addItemHandler = () => {
        setitemArray([...itemArray, item])
        setItem("")
        // e.target.value=""
        // setItem("")
    }
    const deleteListHandler = (list) => {
        let lists = [...itemArray]
        lists.splice(list, 1)
        setitemArray(lists)
    }
    return (
        <div>
            <div className="">
                <Container>
                    <Row className="pt-5 justify-content-md-center text-primary">
                        <Col md={4}>
                            <h2 className="text-center">To Do </h2>
                        </Col>
                    </Row>
                </Container>
                <Container className=''>
                    <Row className="justify-content-md-center">
                        <Col md={4} >
                            <InputGroup size="md">
                                <FormControl value={item} onChange={inputItemHandler} placeholder="add a item" />
                                <div className="px-4">
                                    <Button onClick={addItemHandler} variant="outline-success">  <FontAwesomeIcon size="lg" icon={faPlus} /></Button>
                                </div>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center pt-4">
                        <Col md={4} >
                            <ListGroup>
                                {
                                    itemArray.map((list, index) => <ToDoList key={index} listItem={index} deleteListHandler={deleteListHandler} color={colorArray[index]} list={list}></ToDoList>)
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default ToDo;