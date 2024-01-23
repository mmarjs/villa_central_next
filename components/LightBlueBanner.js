import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';

const LightBlueBanner = ({ html }) => {

  return (
    <section className="LightBlueBanner">
      <Container>
        <Row>
          <Col lg={12}>
            <ReactMarkdown>
              {html}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </section>
  );

}

export default LightBlueBanner;