import React, {useState, useEffect} from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import {post} from '../Api/loginApi';
import {includes} from 'lodash'

const StyledContainer = styled(Container)`
    background-color: red;
    margin-top: 2%;
    padding: 2%;
`;

function Login () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
  }, [password, userName]);
  
  async function handleSubmit() {
    try {
      console.log('username', userName);
      console.log('password', password);
      const data = {
          username: userName,
          password: password
      };
      console.log(data);
      const x = await post('http://localhost:34349/login', data);
      if (includes(x, "duplicate")) {
          console.log("It's a duplicate user, ask them to login");
          Alert("please login. You are already registered");
      }
      // console.log(response);
    } catch (e) {
      console.log(e);
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
