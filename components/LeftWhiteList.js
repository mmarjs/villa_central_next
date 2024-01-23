import React from "react";
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';

const LeftWhiteList = ({ content }) => {

  return (
    <section className="LeftWhiteList">
      {/* <div className="LeftWhiteList_bg" style={{backgroundImage:`url(https://res.cloudinary.com/dmt8jsixt/image/upload/v1662340652/villa-central/bed_u6sqww.jpg)`}} /> */}
      <Image src='https://res.cloudinary.com/dmt8jsixt/image/upload/v1662340652/villa-central/bed_u6sqww.jpg' alt='LeftWhiteList' layout='fill' className="LeftWhiteList_bg" />
      <Container>
        <Row>
          <Col lg={12}>
            <ReactMarkdown>
              {content!=='' && content!==undefined && content.list_holder!==undefined ? content.list_holder : ''}
            </ReactMarkdown>
            <div className="LeftWhiteList_rightContent">
              <ReactMarkdown>{content!==undefined && content.right_content!==undefined ? content.right_content : ''}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );

}

export default LeftWhiteList;