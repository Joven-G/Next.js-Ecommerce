import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class Carrossel extends React.Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item bsClass="carousel-promo">
          <img className="img-carousel"  alt="PROMO" src="/public/static/banner1.jpg" />

        </Carousel.Item>
        <Carousel.Item bsClass="carousel-promo">
          <img className="img-carousel" alt="450x250" src="/public/static/banner2.jpeg" />

        </Carousel.Item>
        <Carousel.Item bsClass="carousel-promo">
          <img className="img-carousel" alt="450x250" src="/public/static/banner3.jpg" />

        </Carousel.Item>
      </Carousel>
    );
  }

}
