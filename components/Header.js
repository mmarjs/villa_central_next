import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [HamburgMenuClicked, setHamburgMenuClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (document.body.classList.contains("ShowMenuOnMobile")) {
        document.body.classList.remove("ShowMenuOnMobile");
      }
    }, 1);
  }, []);

  const HamburgMenuOnClick = () => {
    if (HamburgMenuClicked) {
      document.body.classList.remove("ShowMenuOnMobile");
      setHamburgMenuClicked(false);
    } else {
      setHamburgMenuClicked(true);

      document.body.classList.add("ShowMenuOnMobile");
    }
  };

  return (
    <header>
      <Container>
        <Row>
          <Col lg={12} className="header-holder">
            <Link href="/">
              <a>
                <Image
                  src="https://res.cloudinary.com/dmt8jsixt/image/upload/v1662343559/villa-central/logo_xbegat.png"
                  alt="Logo"
                  width={166}
                  height={70}
                />
              </a>
            </Link>
            <div className="HeaderRightMenu">
              <ul className="header_contact_menu">
                <li>
                  EMAIL US:{" "}
                  <a href="mailto:info@villa-central.com">
                    info@villa-central.com
                  </a>
                </li>
                <li>
                  PH: <a href="tel:+385 91 544 2125">+385 91 544 2125</a>
                </li>
                <li>
                  VISIT US:{" "}
                  <a href="https://www.google.com/maps/dir//Istarska+ul.+32,+21000,+Split,+Croatia/@43.5098675,[…]55f800f774839:0x99927a685092f1c!2m2!1d16.4460195!2d43.5098889" target="_blank" rel="noreferrer">
                    Istarska ul. 32, 21000, Split, Croatia
                  </a>
                </li>
              </ul>
              <div className="header_navigation_menu_holder">
                <ul className="header_navigation_menu">
                  <li>
                    <Link href="/arrivals">
                      <a
                        className={
                          router.pathname == "/arrivals" ? "active" : ""
                        }
                      >
                        <span>Arrival</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/the-apartments">
                      <a
                        className={
                          router.pathname == "/the-apartments" ? "active" : ""
                        }
                      >
                        <span>The Apartments</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/book-now">
                      <a
                        className={
                          router.pathname == "/book-now" ? "active" : ""
                        }
                      >
                        <span>Book Now</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                type="button"
                className="hamburg"
                onClick={HamburgMenuOnClick}
              >
                <div className="hamburg_line_1"></div>
                <div className="hamburg_line_m m1"></div>
                <div className="hamburg_line_m m2"></div>
                <div className="hamburg_line_4"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
