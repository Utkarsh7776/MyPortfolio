import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="bg-dark text-light text-center py-5" id="home">
      <Container>
        <h1 className="display-4" data-aos="fade-up">
          Uttkarsh Chaudhari
        </h1>
        <p className="lead" data-aos="fade-up" data-aos-delay="200">
          Full Stack Java Developer | Spring Boot • React.js • MySQL • REST APIs
        </p>
        <div className="mt-4">
          <Button
            variant="primary"
            href="#projects"
            className="me-2"
            data-aos="zoom-in"
            
          >
            View Projects
          </Button>
          <Button
            variant="outline-light"
            href=".\Uttkarsh.Chaudhari-JavaFullStack.pdf"
           download="Utkarsh_Resume.pdf"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Download Resume
          </Button>
        </div>
      </Container>
    </div>
  );
}
