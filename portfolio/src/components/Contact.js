import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4">Contact</h2>
      <Row className="text-center">
        <Col md={3}><FaEnvelope /> utkarshuc7776@gmail.com</Col>
        <Col md={3}><FaPhone /> 7020073276</Col>
        <Col md={3}>
          <FaLinkedin />{" "}
          <a href="https://www.linkedin.com/in/utkarsh-chaudhari-1179ab36a">
            LinkedIn
          </a>
        </Col>
        <Col md={3}>
          <FaGithub />{" "}
          <a href="https://github.com/Utkarsh7776">
            GitHub
          </a>
        </Col>
      </Row>
    </Container>
  );
}
