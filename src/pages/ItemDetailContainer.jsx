import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';

export const ItemDetailContainer = () => {


  const { id } = useParams();

  const {productData} = useGetProductById("products", id);

  return (
    <Card key={productData.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productData.thumbnail} />  
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
          {productData.description}
        </Card.Text>
        <ItemCount productId={item.id}  />
      </Card.Body>
    </Card>
  )
}
