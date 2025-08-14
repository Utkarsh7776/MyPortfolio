import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Coaching Classes Website",
    desc: "Responsive multi-page website built with React.js, Bootstrap, and custom CSS.",
    github: "https://github.com/Utkarsh7776/NEW-CA-WEBSITES.git",
    tech: "React.js, Bootstrap, CSS"
  },
  {
    title: "Student Management System",
    desc: "CRUD app using Spring Boot, Hibernate, Thymeleaf, and MySQL.",
    github: "#",
    tech: "Spring Boot, Hibernate, MySQL, Thymeleaf"
  }
];

export default function Projects() {
  return (
    <Container className="py-5" id="projects">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((proj, index) => (
          <Col md={6} key={index} className="mb-4" data-aos="fade-up">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <p><strong>Tech Stack:</strong> {proj.tech}</p>
                <Button variant="primary" href={proj.github} target="_blank">
                  View on GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
