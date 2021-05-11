import React from 'react';
import { Navbar, Nav, Form, Button, Card, Row } from 'react-bootstrap';

function FormInput(props) {
    return (
        <>
        <Form.Group className="col-md-6" controlId="" style={{ marginBottom: "10px" }}>
                                    <Form.Label style={{ marginBottom: "0" ,marginLeft:"10px"}}>{props.label}</Form.Label>
                                    <Form.Control style={{fontSize:props.font,}} readOnly={props.r} type={props.type} id="" name="" value={props.value} placeholder={props.pHolder} onChange={props.myOnChange} />
                                </Form.Group>
            
        </>
    )
}

export default FormInput
