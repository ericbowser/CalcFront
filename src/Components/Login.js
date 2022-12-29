import React, {useState, useEffect} from 'react';
import {Form, Container, Button, Alert} from 'react-bootstrap';
import styled from 'styled-components';
import {post} from '../Api/loginApi';
import {includes} from 'lodash'
import Calc from './Calculator';

const StyledContainer = styled(Container)`
    background-color: red;
    margin-top: 2%;
    padding: 2%;
`;

function Login () {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
  }, [password, username]);
  
  function handleSubmit() {
    try {
      console.log('username', username);
      console.log('password', password);
      const data = {
          username: username,
          password: password
      };
      console.log(data);
      const res = post('http://localhost:34349/login', data)
          .then(response => {
              console.log(response);
              return response;
          })
          .catch(err => {
              console.log("error", err);
          })
      console.log("after post", res);
    } catch (e) {
      console.log(e);
      // handle your error state here
    }
  }
  
  return (
      <StyledContainer>
          <Calc/>
          <Form onSubmit={handleSubmit} >
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label style={{'color': 'white'}}>Email address</Form.Label>
                  <Form.Control type='userName' placeholder='Enter email' onChange={event => {
                      setUserName(event.target.value);
                  }}/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label style={{'color': 'white'}}>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' onChange={event => {
                      setPassword(event.target.value);
                  }}/>
              </Form.Group>
              <Form.Group>
                  <div style={{'paddingBottom': '30px'}}>
                      <Button variant='primary' type='submit' style={{'float': 'right'}}>
                          Submit
                      </Button>

                  <Button variant='info'  >
                          Register
                      </Button>
                  </div>
              </Form.Group>
          </Form>
      </StyledContainer>
  );
}

export default Login
