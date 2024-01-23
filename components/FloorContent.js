import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
const FloorContent = (props) => {

  return (
    <section
      className={
        "FloorContent " +
        (props.type == "right" ? "FloorContent_right" : "")
      }
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="FloorContentPanel">
              <ReactMarkdown>{props.html}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FloorContent;