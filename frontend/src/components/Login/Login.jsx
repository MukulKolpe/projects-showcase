import React from "react";
import "./Login.css"
import loginpic from './login.svg';
import {Row, Col,Container } from 'react-bootstrap';

const Login = () => {
    return (
      <>
      <Container className="mt-5">
        <div className = "flex-container">
        <Row>
          <Col lg={5} md={20} sm={12}>
            <img src={loginpic} alt="login-pic" className="login-pic"/>
          </Col>
          <Col className="sign-in-btn" lg={8} md={6} sm={12}>
            <h1>Sign In With Google</h1>
          <button className="login-with-google-btn">
          Sign In With Google
        </button> 
          </Col>
  
        </Row>  </div>
      </Container>
      </> 
    );
};

export default Login;
