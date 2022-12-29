import React from 'react';
import {Form, Container, Button, Alert, ButtonGroup} from 'react-bootstrap';

function Calc() {
    return (
        <ButtonGroup>
            <Button>Add</Button>
            <Button>Subtract</Button>
            <Button>Divide</Button>
            <Button>Multiply</Button>
        </ButtonGroup>
    )
}

export default Calc;