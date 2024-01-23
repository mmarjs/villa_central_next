import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';

const X5BlueBlocks = ({ items }) => {

  const boxes_data = [
    {
      image: 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662343948/villa-central/measuring-tape_2x_d3fr75.png',
      number:'3',
      title:'APARTMENTS'
    },
    {
      image: 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662341659/villa-central/bedroom-2_2x_dyg83f.png',
      number:'02',
      title:'BEDROOMS'
    },
    {
      image: 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662343993/villa-central/parking_2x_ayvn3m.png',
      number:'03',
      title:'CAR PARKINGS'
    },
    {
      image: 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662342851/villa-central/home_2x_hwp01v.png',
      number:'2021',
      title:'BUILT YEAR'
    },
    {
      image: 'https://res.cloudinary.com/dmt8jsixt/image/upload/v1662340328/villa-central/appreciation_2x_nayvdy.png',
      number:'-',
      title:'FIBRE INTERNET'
    }
  ];

  const renderBoxes = () => {
    if(items===undefined)return [];
    return items.map((boxe_data, index)=>(
      <li key={index}>
        <div className="NextImageContainer">
          <Image src={boxes_data[index].image} alt={'Blue Box - '+boxe_data.title} width={44} height={44} />
        </div>
        <h4>{boxe_data.number}</h4>
        <p>{boxe_data.title}</p>
      </li>
    ));
  }

  return (
    <section className="X5BlueBlocks">
      <Container>
        <Row>
          <Col lg={12}>
            <ul>
              {renderBoxes()}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default X5BlueBlocks;