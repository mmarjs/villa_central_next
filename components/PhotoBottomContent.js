import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';

const PhotoBottomContent = ({ html, background }) => {

  return (
    <section className="PhotoBottomContent">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="NextImageContainer">
              <Image src={background?.url} alt={background?.alternativeText} layout='fill' className="PhotoBottomImage" />
            </div>
            <ReactMarkdown>{html}</ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </section>
  );

}

export default PhotoBottomContent;