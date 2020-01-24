// Library
import React from "react";
import PropTypes from "prop-types";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  CardFooter,
  Item,
  BlockImage,
  Image,
  Price,
  Title
} from "../../styles/styles";

const Product = ({ img, name, price }) => {
  return (
    <Item>
      <BlockImage>
        <Image variant="top" src={img} />
      </BlockImage>
      <Card.Body>
        <Card.Title>Название товара:</Card.Title>
        <Title>{name}</Title>
      </Card.Body>
      <CardFooter>
        <Price>{price}$</Price>
        <Button variant="outline-secondary">Купить</Button>
      </CardFooter>
    </Item>
  );
};

export default Product;

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
};
