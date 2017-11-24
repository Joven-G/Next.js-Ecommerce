import { Carousel } from 'react-bootstrap';

export default class Carrossel extends React.Component {

    render (){
        return (
  <Carousel>
    <Carousel.Item  bsClass="carousel-promo">
      <img class="img-carousel" alt="PROMO" src="/static/promocao.jpg" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item  bsClass="carousel-promo">
      <img class="img-carousel" alt="450x250" src="/static/Promocao-banner.png" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item  bsClass="carousel-promo">
      <img class="img-carousel" alt="450x250" src="/static/promo.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
}

}
