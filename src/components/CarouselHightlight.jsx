import Carousel from 'react-bootstrap/Carousel';
import Highlight1 from '../assets/highlight1.jpg';
import Highlight2 from '../assets/highlight2.jpg';
import Highlight3 from '../assets/highlight3.jpg';

function CarouselComponent() {
  const carouselStyle = {
    width: '70%',
    height: '20%',
    margin: '0 auto',
    borderRadius: '14px',
    overflow: 'hidden',
  };

  


  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Highlight1}
          alt="First slide"
         
        />
        <Carousel.Caption >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Highlight2}
          alt="Second slide"
         
        />
        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Highlight3}
          alt="Third slide"
         
        />
        <Carousel.Caption >
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;