import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import app from '../utils/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const initialInputState = {
    email: '',
    password: '',
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
    // console.log(eachEntry);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`USER: ${user}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            onChange={handleInputChange}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SignUp;
