import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const BigHeader = ({ slides_data, background }) => {

  const renderSlides = () => {
    const slides = slides_data;
    if(slides===undefined)return [];
    if (slides.length > 0) {      
      return slides.map((slide_content, index) => (
        <SwiperSlide key={index}>
          <ReactMarkdown className="swiper_content">
            {slide_content.content}
          </ReactMarkdown>
        </SwiperSlide>
      ));
    }
    else return [];
  }

  return (
    <section className="big_header" >
      <Image src={background?.url} alt={background?.alternativeText} layout='fill' className='BigHeaderImage' />
      <Container>
        <Row>
          <Col lg={12}>
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              //onSlideChange={() => console.log('slide change')}
              onSwiper={
                //(swiper) => console.log(swiper)
                (swiper)=>{}
              }
            >
              {renderSlides()}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BigHeader;