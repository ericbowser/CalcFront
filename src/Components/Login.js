import React, {useState, useEffect} from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
// import {isEmpty} from 'lodash'

const StyledContainer = styled(Container)`
    background-color: black;
    margin-top: 25px;
    padding: 20px;
`;

function Login () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
  }, [password, userName]);
  
  const handleSubmit = (event) => {
    try {
      console.log('username', userName);
      console.log('password', password);
    } catch (e) {
      console.log(e.target.value);
      // handle your error state here
    }
  }
  
  return (
      <StyledContainer>
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
                  <div style={{'padding-bottom': '30px'}}>
                      <Button variant='primary' type='submit' style={{'float': 'right'}}>
                          Submit
                      </Button>
                      
                  </div>
              </Form.Group>
          </Form>
      </StyledContainer>
  );
}

export default Login
