import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";
import Image from 'next/image';

const Testimonials = ({ content, testimonials }) => {

  const renderSlider = () => {
    if (testimonials === undefined || testimonials === "")
      return [];
    return testimonials.map((t_data, index) => (
      <SwiperSlide key={index}>
        <div className="TestimonialsItem">
          <ReactMarkdown>{t_data.content}</ReactMarkdown>
        </div>
      </SwiperSlide>
    ));
  }

  return (
    <section className="Testimonials">
      <Container>
        <Row>
          <Col lg={12}>
            <ReactMarkdown>
              {content !== undefined &&
              content.top_title !== undefined
                ? content.top_title
                : ""}
            </ReactMarkdown>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <div className="NextImageContainer">
              <Image
                className="TestimonialsPhoto"
                src='https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342109/villa-central/client1_wta1s1.png'
                alt={
                  content !== undefined &&
                  content.top_title !== undefined
                    ? content.top_title
                    : ""
                }
                layout='fill'
              />
            </div>
          </Col>
          <Col md={7}>
            <ReactMarkdown>
              {content !== undefined &&
              content.right_content !== undefined
                ? content.right_content
                : ""}
            </ReactMarkdown>
            <div className="TestimonialsSwiper">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={10000}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                //onSlideChange={() => console.log('slide change')}
                onSwiper={
                  //(swiper) => console.log(swiper)
                  (swiper) => {}
                }
              >
                {renderSlider()}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;