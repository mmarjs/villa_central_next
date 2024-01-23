import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';

const DescriptionForVilla = ({ content, first_background, second_background }) => {

  return (
    <section className="DescriptionForVilla">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="NextImageContainer">
              <Image
                className="DescriptionForVilla_bigPhoto"
                src={first_background.url}
                alt={first_background.alternativeText}
                layout='fill'
              />
            </div>
            <div className="DescriptionForVilla_bottom">
              <div className="NextImageContainer">
                <Image src={second_background.url} alt={second_background.alternativeText} className="DescriptionForVilla_bigPhoto" layout='fill' />
              </div>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DescriptionForVilla;