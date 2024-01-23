import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'

const BookNowForm = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [bookNowFormClass, setBookNowFormClass] = useState('');
  const [loadingText, setLoadingText] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formSubmit = (event) => {
    var errorMsg = '';
    event.preventDefault();
    errorMsg = validateBookingForm();
    setErrorMessage(errorMsg);
    if(errorMsg !== ''){
      return;
    }
    setBookNowFormClass('BookNowForm_sending');
    setLoadingText('...');
    emailjs.send(
      'service_69wqocj',//service id
      'template_vk5fnou',//template id 
      formValues,
      '9hGimOA8AEb2hG_ov'//user id
      )
      .then((result) => {
        console.log(result.text);
        /*setAlertContent({
          heading: "Thank you for contacting me.", 
          message: "I will respond to your message as soon as I can."
        })
        setShowAlert(true)*/
        setBookNowFormClass('BookNowMessageIsSendOK');
      }, (error) => {
        console.log(error.text);
        setBookNowFormClass('');
        setLoadingText('');
        setBookNowFormClass('BookNowMessageIsSendError');
      });
  }

  const handleChangeInput = (event) => {
    var errorMsg = '';
    setFormValues({...formValues, [event.target.id]: event.target.value })
    errorMsg = validateBookingForm();
    setErrorMessage(errorMsg)
  }

  const validateBookingForm = () => {
    var errorMsg = '';
    if(formValues.name == ''){
      errorMsg = 'Please add name';
    } else if(/\S+@\S+\.\S+/.test(formValues.email) == false){
      errorMsg = 'Please add valid email address';
    } else if(formValues.message == ''){
      errorMsg = 'Please add message';
    }
    return errorMsg;
  }
  
  return (
    <section className={'BookNowForm '+ bookNowFormClass}>
      <Container>
        <Row>
          <Col lg={12}>
            <Form>
              <h2>Book Now</h2>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name<span>*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" onChange={handleChangeInput} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email<span>*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" onChange={handleChangeInput} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message<span>*</span></Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter a Formal Description" onChange={handleChangeInput} />
              </Form.Group>
              <Button type="button" variant="info" size="lg" className="w-100" onClick={formSubmit}>
                SUBMIT{loadingText}
              </Button>
              <hr />
              <div className="BookNowErrors">
                {errorMessage}
              </div>
              <div className="BookNowThankYouMessage">
                <div>
                  <p>
                    Booking message is send.
                  </p>
                  <p>
                  Thank you for getting in touch! 
                  </p>
                  <p>
                  We appreciate you contacting us.
                  </p>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BookNowForm;