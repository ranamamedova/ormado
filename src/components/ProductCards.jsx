import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rectangle from "../assets/img/Rectangle.png";
import energydrrink from "../assets/img/energydrink.png";
import Vector from "../assets/img/Vector.png";
import Vector1 from "../assets/img/Vector1.png";
import Ellipse from "../assets/img/Ellipse.png";
import Heart from "../assets/img/Heart.png";
import Shopbag from "../assets/img/Shopbag.png";
import { Col, Row } from "react-bootstrap";
import productCard from "../data/ProductCard.js"

const ProductCards = () => {
  const [data] = useState(productCard)
  return (
  <>
    {console.log(data)}
    <div className="product-cards">
      <h2 className="title-section mb-5 ms-3">
        Your <span>Ormado</span>
      </h2>
      <Row>
        {
          data.map((fd,i)=>(
            <Col xs={6} md={3} className="d-flex justify-content-center mb-5">
            <Card className="card p-3 mt-5" style={{ width: "14rem" }}>
            <Card.Img className="card-rentagle" src={Rectangle} />
            <Card.Img className="card-ellipse" src={Ellipse} />
            <Card.Img className="card-energy" src={energydrrink} />
            <Card.Img className="card-vector" src={Vector} />
            <Card.Img className="card-vector1" src={Vector1} />
            <Card.Img className="card-vector2" src={Vector1} />
            <Card.Body>
              <Card.Title>{fd.title}</Card.Title>
              <Card.Text>$20.00</Card.Text>
              <div className="d-flex justify-content-center">
                <button className="btn-card me-1">
                  <img src={Heart} className="btn-img" />
                </button>
                <button className="btn-card me-1">
                  <img src={Shopbag} className="btn-img" />
                </button>
                <button className="btn-readmore">Read More</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
          ))
        }


      </Row>
      <div className="d-flex justify-content-center mt-5">
        <Button className="btn-seeall">See All</Button>
      </div>
    </div>
  </>
  );
};

export default ProductCards;
