import React from 'react';
import { CardGroup, Card, Container } from 'react-bootstrap';
import Footer from './Footer';
import ImageCol from './ImageCol';

function CardComponent(props) {
  return (
    <div className="main_div">
      <div className="text-banner">
        <h4 className="text-banner-title">{props.title}</h4>
      </div>
      <div className="row productList">
        {props.children}
      </div>
    </div>

  );
}
export default CardComponent;