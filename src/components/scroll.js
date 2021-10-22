import React, { Component } from "react";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import Footer from "./footer";
// import Login from './login';
class Scroll extends Component {
  render() {
    return (
      <div className="scroll-component">
        <div class="container">
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
              <img
                className="d-block w-100"
                src="http://corporatewellness.urlife.co.in/assets/img/bg-new-2.jpg"
                alt="Fourth slide"
              />

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
                src="https://media5.picsearch.com/is?SxTEEXmEiSRQuJf-TBmRPK5dsFB4mSWNifS9xLQcpBw&height=227"
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

          <div className="videos">
            <h2>Images</h2>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <Row>
                      <Col md-4>
                    <img
                      src="https://thumbs.dreamstime.com/b/web-156637519.jpg"
                      width="256px"
                    /></Col>
                    <Col md-4>
                    <img
                      src="https://static6.depositphotos.com/1070914/590/i/600/depositphotos_5907954-stock-photo-man-extreme-biking.jpg
                      "
                      width="220px"
                    /></Col>
                  </Row>
                </h5>
                <h5 class="card-title">Cycling</h5>

                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
{/*                 
                <a href="#" class="btn btn-primary">
                  Signup
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <h2>Our Services</h2>
        <Container class="gridclass">
          <Row md={4}>
            <Col><img
                              src="https://media2.picsearch.com/is?ZXkRFfvyjFIpnz12KcK77eMMsKrI_PfGIFNQMyC4rDE&height=227
                              "
                              width="220px"
                            /></Col>
            <Col xs={6}><img
                              src="https://static6.depositphotos.com/1070914/590/i/600/depositphotos_5907954-stock-photo-man-extreme-biking.jpg
                              "
                              width="220px"
                            /></Col>
            <Col><img
                              src="https://media1.picsearch.com/is?4M42wZJPw0D_WG_D6wNKKwjnyyMPQ9HU55P1dr90-iw&height=227                      "
                              width="220px"
                            /></Col>
          </Row>
        </Container>
        {/* <Login/> */}
        <Footer />
      </div>
      //   </div>
    );
  }
}

export default Scroll;
