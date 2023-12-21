import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const ItemListContainer = ({ productsData }) => {
    
  return (
    <div style = {{display:'flex', justifyContent:'space-around', width: '100vw', flexWrap: 'wrap'}}>
    
    {productsData.map((item,index) =>{
      return (
    <Card key={index} style={{ width: '18rem' }}>
      <Link to={`/item/${item.id}`}><Card.Img variant="top" src={item.thumbnail} /></Link>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary">Buy now!</Button>
      </Card.Body>
    </Card>)
    })}

    </div>
  )
}

export default ItemListContainer