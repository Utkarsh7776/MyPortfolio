import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5"  id="about">
      <Row className="align-items-center">
        <Col md={4} data-aos="fade-right">
          <img
            src="https://via.placeholder.com/250"
            alt="Uttkarsh Chaudhari"
            className="img-fluid rounded-circle shadow"
          />
        </Col>
        <Col md={8} data-aos="fade-left">
          <h2>About Me</h2>
          <p>
            I’m a Java Full Stack Developer with hands-on experience in building
            scalable applications using Java, Spring Boot, Hibernate, React.js,
            and MySQL. I focus on creating responsive, user-friendly interfaces
            and robust backend APIs, following best UI/UX practices.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
