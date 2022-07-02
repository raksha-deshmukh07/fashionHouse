import React from 'react';
import { Link, Route, Routes, Switch, useNavigate } from 'react-router-dom';
import { Router } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Form,Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import './ProfilePage.css'

function ProfilePage(props) {
  const navigate=useNavigate();
    return (
        <div className='container-fluid' >
            <Form className='loginform'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <p>By login you agree to our <a href="/terms" onClick={()=>navigate('/terms')}>Terms and conditions</a></p>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> 
  <Button variant="primary" type="submit">
    Submit
  </Button>   Not a member? <a href="" onClick={()=>navigate('/signup')}>Sign Up</a>
</Form>
        </div>
    );
}

export default ProfilePage;

