import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";

const PanelOnSide = ({ type, html, background }) => {

  return (
    <section
      className={
        "PanelOnSide " +
        (type == "left_white" ? "PanelOnside_LeftWhite" : "")
      }
      style={{ backgroundImage: `url(${type == "left_white" ? background?.panel_on_side_left?.background?.data?.attributes?.url : background?.panel_on_side_right?.background?.data?.attributes?.url })` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="PanelOnSide_panel">
              <ReactMarkdown>{html}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PanelOnSide;