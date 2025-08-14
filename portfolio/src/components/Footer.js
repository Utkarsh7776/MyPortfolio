import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        <p>
          © {new Date().getFullYear()} Uttkarsh Chaudhari | Built with React & Bootstrap
        </p>
      </Container>
    </footer>
  );
}
