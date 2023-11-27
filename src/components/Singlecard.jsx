import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'



const Singlecard = ({ id, photo, title, desc, price }) => {
  return (

    <>
      <Container>


        <Card className='mycard  mt-5' >
          <Card.Img className='image' height={200} variant="top" src={photo} />
          <Card.Body >

            <div className="main">

              <div className="first">
                <div className="one">
                  <Card.Title className='title'>{title}</Card.Title>
                  <Card.Text className='desc'>
                    {desc}
                  </Card.Text>
                </div>
                <Card.Text className='myprice'>
                  <p className={price.length}>{price}</p>
                </Card.Text>


              </div>

              <div className="second">
                <button className='order'> <h6>Order now</h6></button>
              </div>

            </div>




          </Card.Body>

        </Card>



      </Container>
    </>

  )
}

export default Singlecard