  import React from "react";
  import { Link } from "react-router-dom";
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Container from "react-bootstrap/Container";
  import Nav from "react-bootstrap/Nav";
  import Navbar from "react-bootstrap/Navbar";
  import styles from "./navbar.module.css";

  export default function DNavbar() {
    return (
      <>
         <Navbar expand="lg" className={styles.bgBodyTertiary} sticky="top" >
        <Col lg={1} className={styles.brandstyle}  >
         <Navbar.Brand href="/" style={{color: 'white'}}>Job Board</Navbar.Brand>
          </Col>
          <Col lg={8} >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Nav className="me-auto" >
              <Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
              <Nav.Link href="#" style={{color: 'white'}}>About</Nav.Link>
            </Nav> 
          </Col>
          <Col lg={2} >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Nav className="me-auto" >
              <Nav.Link href="#" style={{color: 'white'}}>Login</Nav.Link>
            </Nav> 
          </Col>
          </Navbar>   
          </>
    );
  }


     

    