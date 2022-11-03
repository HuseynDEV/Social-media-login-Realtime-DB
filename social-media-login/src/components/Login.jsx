import React, { useState, useEffect, useContext } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import GoogleButton from "react-google-button";
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../context';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn, signWithGoogle } = useData()



  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await signIn(email, password)
      navigate('/home')
    }
    catch (err) {
      setError(err.message)
    }

  }

  const handleGoogle = (e) => {
    e.preventDefault()

    try {
      signWithGoogle()
      navigate('/home')
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <Alert>{error}</Alert>
        <Form >
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
            <Button variant="primary" type="Submit" onClick={handleLogin}>
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogle}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  )
}

export default Login