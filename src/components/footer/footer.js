import React from "react";
import Col from 'react-bootstrap/Col';
import styles from "./footer.module.css";
import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    
    <Col lg={12}>
  	<Card className="text-center">
      <Card.Body className={styles.footerbody} >
        <Card.Title className={styles.titletext}>Get Started</Card.Title>
        <Card.Text className={styles.bodytext}>
          Free and Effective way to Find The Job!
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
   
  );
}
