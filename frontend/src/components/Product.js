import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/products/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews}`}
          />
        </Card.Text>
        <Card.Text as="h3">INR {props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
