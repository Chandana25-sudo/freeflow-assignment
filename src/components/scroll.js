import React, { Component } from "react";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import Footer from "./footer";
import Image1 from "../assests/carousel-img1.jpg";
import Image2 from "../assests/carousel-img2.jpg";
import {
 
  Link
} from "react-router-dom";
import Subscroll from "../sub-scroll";
// import Login from './login';
class Scroll extends Component {
  render() {
    return (
      <div className="scroll-component">
        <div class="container" id="scroll-thumb">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img
              src="	https://urlife.co.in/wp-content/uploads/2020/04/20003353/urlife_favicon.jpg"
              align="center"
            />
            <h3>Workplace Health for Corporates</h3>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>

          <Carousel>
            <Carousel.Item>
              <Link to="/imagedata"><img
                className="d-block w-100"
                src={Image1}
                alt="Fourth slide"
              />
              
              </Link>

              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image2}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media2.picsearch.com/is?ZXkRFfvyjFIpnz12KcK77eMMsKrI_PfGIFNQMyC4rDE&height=227"
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media1.picsearch.com/is?4M42wZJPw0D_WG_D6wNKKwjnyyMPQ9HU55P1dr90-iw&height=227"
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>Fourth slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <h2>About Us</h2>
          <p>
          we strive to keep you fit & healthy through a range of holistic offerings that include fitness and yoga, healthy meals, mental wellbeing and primary care. Now anyone can now stay healthy from the safety of their homes with just a single app that helps you to #BeBetterEveryDay
          </p>
          <p>Indian fitness and well-being startup which has established a market-leading position in the country in four years of existence, is ready to stretch to a new geography.</p>

          
        <h2>Our Services</h2>
        <Container class="gridclass">
          <Row>
            <Col md={4}><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header img-align">
                            <img src="https://www.cynchconstructions.com/Group%20109.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
            <Col md={4}><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header img-align">
                            <img src="https://www.cynchconstructions.com/Group%20109.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
            <Col md={4}><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header img-align">
                            <img src="https://www.cynchconstructions.com/Group%20109.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
          </Row>
        </Container>
        <h2>Our Packages</h2>
        <Container class="gridclass">
          <Row>
            <Col md={6} ><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header package-img">
                            <img src="https://www.cynchconstructions.com/email.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
            <Col md={6} ><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header package-img">
                            <img src="https://www.cynchconstructions.com/email.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
            <Col md={6} ><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header package-img">
                            <img src="https://www.cynchconstructions.com/email.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
                 <Col md={6} ><div className="shadow p-3 mb-5 bg-white rounded hover-prop" >
                    <div className="card">
                    <div class="card-header package-img">
                            <img src="https://www.cynchconstructions.com/email.svg"/>
                      </div>
                        <div className="card-body">
                            <h5 className="card-title">Special Yoga Training</h5>
                            <p className="card-text">Yoga’s integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution.</p>
                            {/* <a href="#" className="btn btn-primary">Signup</a> */}
                        </div>
                    </div>
                 </div> </Col>
          </Row>
        </Container>
        <Footer />
      </div>
         </div>
    );
  }
}

export default Scroll;
