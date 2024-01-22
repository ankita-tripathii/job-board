import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import styles from "./header.module.css";
import { NavLink } from 'react-router-dom'

const Header = () => {
   
    return (
            <Container>
            <Row sticky="top">
            <Col lg={12}>
              <h2 className={styles.heading}>Hacker News Job Board</h2>
            </Col>
            </Row>
            </Container>
       
    )
}

export default Header
