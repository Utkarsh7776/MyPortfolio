import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Experience() {
  return (
    <Container className="py-5" id="experience">
      <h2 className="text-center mb-4">Experience</h2>
      <Row>
        <Col data-aos="fade-up">
          <h5>Java Full Stack Developer Intern</h5>
          <p><strong>Cravitas Technologies, Pune</strong> | Jan 2025 – May 2025</p>
          <ul>
            <li>Developed and maintained full-stack web applications using Java, Spring Boot, Hibernate, and MySQL.</li>
            <li>Built RESTful APIs and integrated them with frontend components.</li>
            <li>Followed Agile practices and participated in code reviews.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
