import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const ContentLeftImage = ({ content, background }) => {

  return (
    <section className="ContentImageContent">
      <Container>
        <Row>
          <Col md={5}>
            <div className="NextImageContainer">
              <Image
                src={background?.url}
                alt={background?.alternativeText}
                className="ContentImageContent_image"
                layout='fill'
              />
            </div>
          </Col>
          <Col md={7} className="ContentImageContent_content">
            <ReactMarkdown>{content}</ReactMarkdown>
            <Link href="/book-now">
              <span className="btn btn-info btn_info_big_header btn_info_contentImageContent">Book now</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContentLeftImage;
