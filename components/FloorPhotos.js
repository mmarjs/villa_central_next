import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const FloorPhotos = ({ photos, title }) => {

  const renderThePhotos = () => {
    return photos.map((photo, index) => (
      <div
        className="FloorPhoto"
        key={index}
        // style={{ backgroundImage: `url(${photo?.url})`}}
      >
        <div className="NextImageContainer">
          <Image src={photo?.url} alt={photo?.alternativeText} layout='fill' className="FloorPhotoImage" />
        </div>
      </div>
    ));
  }

  return (
    <section className="FloorPhotos">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="FloorPhotos_holder">{renderThePhotos()}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FloorPhotos;