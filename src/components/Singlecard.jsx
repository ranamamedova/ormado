import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'



const Singlecard = ({ photo, title, desc, price }) => {
  return (


    <Container>

      <Card className='card ms-5 mt-5' >
        <Card.Img className='image' height={200} variant="top" src={photo} />
        <Card.Body >

          <div className="main">

            <div className="first">
              <Card.Title className='title'>{title}</Card.Title>
              <Card.Text className='desc'>
                {desc}
              </Card.Text>
              <button className='order'>Order now</button>
            </div>

            <div className="second">
              <Card.Text>
                <p>{price}</p>
              </Card.Text>
            </div>
          </div>



        </Card.Body>
      </Card>


    </Container>

  )
}

export default Singlecard