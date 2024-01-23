import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";

const  BigHeaderTextCenter = ({ html, background }) => {
  
  return (
    <section
      className="BigHeaderTextCenter"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <ReactMarkdown>{html}</ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BigHeaderTextCenter;