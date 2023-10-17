import React, { useState } from 'react'
import Singlecard from './Singlecard'
import product from "../data/Product.js"
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'

const Cakes = () => {


  




    const [data, setData] = useState(product);
    console.log(data);

    const mapproduct = data.map((item) => {
        return (

            <Col xs={6} md={4} lg={4}>
                <Singlecard
                    id={item.id}
                    photo={item.photo}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    key={item.id}
                />
            </Col>


        )
    })


    return (
        <>
            <div className="Cakes ">
                <div className="container">
                    <div className="Title ">
                        <p>Most Popular</p>
                        <h4>Our Exclusive <span className='cakes'>Cakes</span></h4>
                    </div>

                    <Row>
                                                {mapproduct}
                       
                    </Row>



                </div>
            </div>

        </>
    )
}

export default Cakes
