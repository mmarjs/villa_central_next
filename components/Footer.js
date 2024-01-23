//libraries:
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  return (
    <footer>
      <Image src='https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342422/villa-central/footer_background_xvy6dj.png' layout='fill' alt='footer' className="footer" />
      <Container>
        <Row>
          <Col lg={12} className="FooterColumnsHolder">
            <div className="footer_column footer_column_1">
              <Link href="/">
                <a className="LogoLinkFoooter">
                  <Image
                    src='https://res.cloudinary.com/dmt8jsixt/image/upload/v1662343077/villa-central/logo_whte_egu7am.png'
                    alt="Logo Footer"
                    width={200}
                    height={85}
                  />
                </a>
              </Link>
              <p>
                Villa Central is a stone villa featuring two self-contained
                apartments with a private pool, garden, and balcony areas for
                residents to enjoy. Each apartment features two bedrooms that
                comfortably accommodate four guests.
              </p>
            </div>
            <div className="footer_column footer_column_2">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link
                    href="/arrivals#security"
                    // className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Arrival 
                  </Link>
                </li>
                <li>
                  <Link
                    href="/the-apartments"
                    // className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-now"
                    // className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@villa-central.com">
                    WRITE US: info@villa-central.com
                  </a>
                </li>
                <li>
                  <a href="tel:+385 91 544 2125">
                    CALL US: +385 91 544 2125
                  </a>
                </li>
                <li>
                  {/* <a href="#" target="_blank">
                    VISIT US: Istarska ul. 32, Split
                  </a> */}
                  <a href="https://www.google.com/maps/dir//Istarska+ul.+32,+21000,+Split,+Croatia/@43.5098675,[…]55f800f774839:0x99927a685092f1c!2m2!1d16.4460195!2d43.5098889" target="_blank" rel="noreferrer">
                    VISIT US: Istarska ul. 32, 21000, Split, Croatia
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <hr className="footer_divider" />
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="FooterCopyrightSocial">
            <p className="FooterCopyrightText">
              © Villa Central All rights reserved.
            </p>
            <ul>
              <li>
                <a href="https://www.instagram.com/villa__central/" target="_blank" rel="noreferrer" >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;