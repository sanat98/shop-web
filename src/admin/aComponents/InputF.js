import React from "react";
import { Form } from "react-bootstrap";


function InputF(props) {
    return (
        <>
            <label
                for={props.for}>{props.label}</label>
            <Form.Control input required={props.required}
                type={props.type}
                placeholder={props.pholder}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                


            />
        </>
    );
}
export default InputF;