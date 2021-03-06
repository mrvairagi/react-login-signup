import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SignUp extends Component {
    render() {
        return (

            <Form> 
                <h3>Sign Up</h3>
                <Form.Group className="mb-3" controlId="formFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter last name" />
                </Form.Group>

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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}