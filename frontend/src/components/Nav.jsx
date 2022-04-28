import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.utils";

const NavigationBar = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Project Showcase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              maxHeight: "400px",
              padding: "8px",
            }}
            navbarScroll
          >
            {!isAuth ? (
              <Nav.Link
                href="/login"
                style={{
                  margin: "0 0 0 0.8rem ",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Log In
              </Nav.Link>
            ) : (
              <>
                <button
                  onClick={signUserOut}
                  style={{
                    margin: "0 0 0 0.8rem ",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Log Out
                </button>
                )
                <Nav.Link
                  href="/addproject"
                  style={{
                    margin: "0 0 0 0.8rem ",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Add Project
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
