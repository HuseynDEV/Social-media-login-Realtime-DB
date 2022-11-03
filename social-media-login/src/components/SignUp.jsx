import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useData } from '../context';

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signUp } = useData()

  // const context = useContext(Context)
  const navigate = useNavigate()

  const handleSign = (e) => {
    e.preventDefault()

    try {
      signUp(email, password)
      navigate('/home')
    }
    catch (err) {
      setError(err.message)
    }

  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert>{error}</Alert>}
        <Form  >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}

            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" onClick={handleSign}>
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  )
}

export default SignUp