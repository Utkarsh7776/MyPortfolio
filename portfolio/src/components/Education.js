import React from "react";
import { Container, Table } from "react-bootstrap";

export default function Education() {
  return (
    <Container className="py-5" id="education">
      <h2 className="text-center mb-4">Education</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institute</th>
            <th>Year</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BCA</td>
            <td>GH Raisoni College, Jalgaon</td>
            <td>2024</td>
            <td>CGPA 6.5</td>
          </tr>
          <tr>
            <td>HSC</td>
            <td>State Board</td>
            <td>2021</td>
            <td>76%</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>State Board</td>
            <td>2019</td>
            <td>68%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
