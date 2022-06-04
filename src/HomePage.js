import React from "react";
import { Card, Carousel } from 'react-bootstrap'
import { useState, render } from 'react';
import CardComponent from "./card";


function HomePage(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
            <div className="Carousel">
      <Carousel interval={1000} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1617875488697/clothing-offers.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Fashion House</h2>
            <p>first image.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/horizontal-banner-template-online-fashion-sale_23-2148585405.jpg?w=2000"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>second image.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg?w=1060&t=st=1654184351~exp=1654184951~hmac=7e42bd56e5cff6f6d94a61dbc77f3785bc4fe8975fb676051bb0b698aa34f149"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              third image
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/vectors/big-sale-web-banner-fashion-and-beauty-product-discount-vector-id1140184926"
            alt="forth slide"
          />
          <Carousel.Caption>
            <h2>Fashion House</h2>
            <p>forth Image</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.1stkidswholesale.co.uk/pub/media/wysiwyg/home/Kids-fashion.jpg"
            alt="fifth slide"
          />
          <Carousel.Caption>
            <h3>fifth slide label</h3>
            <p>
              fifth Image
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardComponent></CardComponent>
        </div>
    );
}
export default HomePage;
