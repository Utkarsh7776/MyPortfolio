import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaJava, FaDatabase, FaBootstrap } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact size={40} /> },
  { name: "Java 8", icon: <FaJava size={40} /> },
  { name: "MySQL", icon: <FaDatabase size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> }
];

export default function Skills() {
  return (
    <Container className="py-5" id="skills">
      <h2 className="text-center mb-4">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={3} sm={6} key={index} className="mb-4" data-aos="fade-up">
            <Card className="text-center p-3 shadow-sm">
              {skill.icon}
              <h5 className="mt-2">{skill.name}</h5>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
