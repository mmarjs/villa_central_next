import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Link from "next/link";
import Image from 'next/image';

const BookNow = () => {
  
  return (
    <section className="BookNow">
      <Container>
        <Row>
          <Col>
            <div className="BookNowContent">
              <Image src='https://res.cloudinary.com/dmt8jsixt/image/upload/v1662341918/villa-central/BookNowBackground_aqro1z.png' layout='fill' alt='BookNowImage' className="BookNowContentImage" />
              <p>CALL US</p>
              <h2>For Bookings</h2>
              <a className="BookNowCallUseLink" href="tel:+385 (0)21 317 902">Call or Msg +385 91 544 2125</a>
              <Link href="/book-now">
                <span className="btn btn-info btn_info_big_header">Book now</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BookNow;