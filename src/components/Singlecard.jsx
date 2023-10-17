import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'



const Singlecard = ({ id, photo, title, desc, price }) => {
  return (


<Container>

<Card className='card' >
      <Card.Img height={200} variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button  variant="primary">{id}</Button>
      </Card.Body>
    </Card>
  

    </Container>

  )
}

export default Singlecard