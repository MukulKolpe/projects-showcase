import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase/Firebase.utils";
import "./Login.css";
import loginpic from "./login.svg";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="login-page">
      <Container className="mt-5">
        <div className="flex-container">
          <div>
            <img src={loginpic} alt="login-pic" className="login-pic" />
          </div>
          <div className="sign-in-btn">
            <h1 className="login-text">Sign In With Google</h1>
            <button
              className="login-with-google-btn"
              onClick={SignInWithGoogle}
            >
              Sign In With Google
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
