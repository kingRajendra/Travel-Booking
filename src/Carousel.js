import React from 'react';
import { Carousel } from 'react-bootstrap'

export default function BootStrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h1>Travel</h1>
            <p>Time to Fly High</p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp4128800.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Hotels</h3>
            <p>A Great Place to Stay</p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <h3>Wonders of World</h3>
            <p>Explore the Places</p>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>

    </div>
  )
}
