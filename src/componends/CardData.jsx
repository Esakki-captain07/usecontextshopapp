import React, { useContext } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';

function CardData({ data }) {
  let { addToCart, removeFromCart } = useContext(CartContext);

  let handleAddToCart = () => {
    addToCart(data.price);
  };

  let handleRemoveFromCart = () => {
    removeFromCart(data.price);
  };

  return (
    <CardGroup>
      <Card className='cardBox'>
        <div className='d-flex'>
          <Card.Img variant="left" src={data.thumbnail} alt="Data Science" className='cardImg' />
          <Card.Body className='card-body'>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Card.Text><b>Brand</b>: {data.brand}</Card.Text>
            <Card.Text><b>Category</b>: {data.category}</Card.Text>
            <Card.Text><b>Rating</b>: {data.rating}</Card.Text>
            <Card.Text><b>Price</b>: {data.price}</Card.Text>
            <Card.Text><b>Discount Percentage</b>: {data.discountPercentage}</Card.Text>
          </Card.Body>
        </div>
        <Card.Footer className=''>
          <Button variant='danger' onClick={handleRemoveFromCart}>Remove</Button>
          <Button variant='primary' className='btn' onClick={handleAddToCart}>Add</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardData;
