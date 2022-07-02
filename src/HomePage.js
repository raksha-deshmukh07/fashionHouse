import React from "react";
import { Button, Carousel } from 'react-bootstrap'
import { useState, render } from 'react';
import CardComponent from "./Card";
import Footer from "./Footer";
import ImageCol from './ImageCol';
// import {connect} from 'react-redux'

function HomePage(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div class="Carousel" >
        <Carousel interval={1000} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              class="d-block w-100"
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
              class="d-block w-100"
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
              class="d-block w-100"
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
              class="d-block w-100"
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
              class="d-block w-100"
              src="https://www.1stkidswholesale.co.uk/pub/media/wysiwyg/home/Kids-fashion.jpg"
              alt="fifth slide"
            />
            <Carousel.Caption>
              <h3>fifth slide label</h3>
              <p>
                fifth Image
              </p>``
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* <Footer></Footer> */}
      </div>
      <CardComponent title='DEAL OF THE DAY'>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://i.pinimg.com/736x/df/10/85/df1085ae9eb649fb39c719a817ef383b.jpg'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://hdn-1.fynd.com/company/884/applications/000000000000000000000004/collections/pictures/landscape-banner/original/j1ezoPWOv-T-Shirts-Under-499.jpeg'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/denim-jeans-50%25-off-sales-discounts-design-template-f880f313168ce3a7870143d8d58b593f_screen.jpg?ts=1597565363'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://img.etimg.com/thumb/msid-87910340,width-640,resizemode-4,imgsize-37068/bag-it.jpg'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://qph.cf2.quoracdn.net/main-qimg-1b43480189cb69392a6e35e60397f42e-pjlq'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://salontrix-images.s3.amazonaws.com/images/salontrix/salontrix_web_banner_mobile_55_1.jpg'></ImageCol>

      </CardComponent>
      <CardComponent title='BEST OF FH EXCLUSIVE BRANDS'>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
      </CardComponent>
      <CardComponent title='TOP PICKS'>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
      </CardComponent>
      <CardComponent title='CATEGORIES TO BAG'>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
        <ImageCol colTitle='Fashion House' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToC-m7rzc_0cTEgGmJW0G_3TkhWZMu3C4XCoF9iA2WAU_BJPqRmXxBwHdYlKkKFixtPxc&usqp=CAU'></ImageCol>
      </CardComponent>
    </>
  );
}
export default HomePage;
