import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dan1Img from '../assets/41.jpg';
import dan2Img from '../assets/42.jpg';
import dan3Img from '../assets/43.jpg';
import dan4Img from '../assets/45.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
          <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-100" 
                    src={ dan1Img }
                    alt="dan1"
                  />
                  <Carousel.Caption>
                      <h3>Raining Mamai</h3>
                      <p>Just enjoy, gachi, pringles</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100" 
                    src={ dan2Img }
                    alt="dan2"
                  />
                  <Carousel.Caption>
                      <h3>Raining Mamai</h3>
                      <p>Just enjoy, salo</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100" 
                    src={ dan3Img }
                    alt="dan3"
                  />
                  <Carousel.Caption>
                      <h3>Raining Mamai</h3>
                      <p>Just enjoy, JS, Nazi</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100" 
                    src={ dan4Img }
                    alt="dan4"
                  />
                  <Carousel.Caption>
                      <h3>Raining Mamai</h3>
                      <p>Just enjoy, Vorkuta</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        )
    }
}