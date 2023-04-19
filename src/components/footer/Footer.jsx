import React from 'react';
import {  Container, Row, Col, Button, InputGroup,Form } from 'react-bootstrap';

const FooterSection = () => {
  return (
    <div className='bg-dark text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-white'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-facebook text-primary" />
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-twitter text-success" />
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-google text-warning" />
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-instagram text-danger" />
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-linkedin text-primary" />
          </a>
          <a href='' className='me-4 text-reset'>
            <i className="bi bi-github text-white" />
          </a>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img style={{width: '52%'}} src="https://i.ibb.co/Phgcstt/kisspng-logo-information-technology-vector-graphics-royalt-5ccb565cc91a76-3238063115568297888237-rem.png" alt="" />
              </h6>
              <p className='text-white'>
              Do You Need Help With Anything?
              </p>
              <div>
              <InputGroup hasValidation>

              <Form.Control type="text" placeholder='Email Address' required />
              <Button variant='success' className="py-2">Send</Button>
            </InputGroup>
              </div>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='nav-link'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Laravel
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='nav-link'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className=' nav-link'>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
              <p className='text-light'>
                <i className="me-2 bi bi-house-door" />
                New York, NY 10012, US
              </p>
              <p className='text-light'>
                <i className="me-3 bi bi-envelope-at" />
                info@example.com
              </p>
              <p className='text-light'>
                <i className="me-3 bi bi-phone" /> + 01 234 567 88
              </p>
              <p className='text-light'>
                <i className="me-3 bi bi-printer" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold ms-1' href=''>
          TAUSIF AHMED
        </a>
      </div>
    </div>
  );
}

export default FooterSection;