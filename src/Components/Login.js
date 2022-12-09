import React, {useState, useEffect} from 'react'
import { Form, Container, Button } from 'react-bootstrap'
// import {isEmpty} from 'lodash'

function Login () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
  }, [password, userName])
  
  return (
    <Container fluid>
      <Form onSubmit
      <Button variant='primary' type='submit'  onSubmit={(event) => {
        try {
          console.log('username', event.target.value);
          console.log('password', event.target.value.username);
        } catch (e) {
          console.log(e.target.value);
          // handle your error state here
        }
      }}>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='userName' placeholder='Enter email' onChange={event => {
              setUserName(event.target.value);
          }}/>
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' onChange={event => {
            setPassword(event.target.value);
          }}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'  onSubmit={(event) => {
          try {
            console.log('username', event.target.value);
            console.log('password', event.target.value.username);
          } catch (e) {
            console.log(e.target.value);
            // handle your error state here
          }
        }}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login
