import React from "react";
import {Form, Container} from 'react-bootstrap';

function Login() {
    return (
        <Container fluid>
            <Form >
                <Form.Label title={'username'}>User Name:</Form.Label>
                <Form.Control title={'username'} id={'username'}>
                </Form.Control>
            </Form>
        </Container>
    )
};

export default Login;