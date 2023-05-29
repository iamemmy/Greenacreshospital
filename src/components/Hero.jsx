import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Carousel style={{ height: '80vh' }} className="d-none d-md-block">
      <Carousel.Item key={1}>
        <img
          className="d-block w-100"
          src="slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <button className="btn btn-primary">Button 1</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key={2}>
        <img
          className="d-block w-100"
          src="slide2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <button className="btn btn-primary">Button 2</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item key={3}>
        <img
          className="d-block w-100"
          src="slide3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <button className="btn btn-primary">Button 3</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;