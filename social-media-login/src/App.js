import React, { useContext } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SignUp from './components/SignUp';
import {ContainerProvider} from './context'

const App = () => {
  return (
    <ContainerProvider>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </ContainerProvider>
  )
}

export default App