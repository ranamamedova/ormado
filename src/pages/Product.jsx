import React, { useContext, useEffect, useState } from "react";
import RangeSlider from "../components/RangeSlider";
import Faqs from "../components/Faqs";
import { ProductContext } from "../context/ProductContext";
import { add } from "./manager/addwishlist/WishSlice";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import slugify from 'slugify';
import ScrollToTop from "../components/ScrollToTop";
import { Link} from "react-router-dom";
import { addToCart } from "./manager/addtocart/CartSlice";


const Product = () => {
  const dispatch = useDispatch();
  

  const [showCategories, setShowCategories] = useState(true);


  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const [showPriceSlider, setPriceSlider] = useState(true);

  const togglePriceSlider = () => {
    setPriceSlider(!showPriceSlider);
  };
  const [value, setValue] = useState({ min: 0, max: 100 });
  const [product] = useContext(ProductContext);
  

 
  return (
    <>
      <ScrollToTop />
      <section className="container-fluid">
        <div className="products-page row pb-5 mb-5 px-5">
          <div className="col-md-3">
            <div
              className="categories-headline d-flex align-items-center justify-content-between"
              onClick={toggleCategories}
            >
              <h5>All Categories</h5>
              <i
                className={`fa-solid ${
                  showCategories ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
            <div className={`categories ${showCategories ? "" : "closed"}`}>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Hot Drinks (25)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Cold Drinks (150)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Sweets (54)</label>
              </div>
              <div className="hot-drinks d-flex">
                <input type="radio" name="" id="radio" />
                <label>Merchandise (47)</label>
              </div>
            </div>
            <hr style={{ marginRight: "30px", color: "#979797" }} />
            <div className="price-slider">
              <div
                className="price-slider-headline d-flex align-items-center justify-content-between"
                onClick={togglePriceSlider}
              >
                <h5>Price</h5>
                <i
                  className={`fa-solid ${
                    showPriceSlider ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </div>
              <div
                className={`price-slider-content ${
                  showPriceSlider ? "" : "closed"
                }`}
              >
                <RangeSlider
                  min={0}
                  max={100}
                  step={5}
                  value={value}
                  onChange={setValue}
                />
                <p>
                  Price: <span>{value.min}</span> -{" "}
                  <span className="value-max">{value.max}</span>
                </p>
              </div>
            </div>
            <hr style={{ marginRight: "30px", color: "#979797" }} />
            <div className="feature-product d-none d-md-block d-lg-block">
              <h5>Feature Product</h5>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://ormado.webluna.org/cdn/img/drink.png"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Ormado Energy Drink</h5>
                      <p className="card-text">$32.00-$20.99</p>
                      <div className="card-text">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{
                  boxShadow: "0px 0px 12px 0px rgba(32, 181, 38, 0.32)",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://ormado.webluna.org/cdn/img/drink1.png"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Ormado Energy Drink</h5>
                      <p className="card-text">$32.00-$20.99</p>
                      <div className="card-text">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://ormado.webluna.org/cdn/img/drink2.png"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">Ormado Energy Drink</h5>
                      <p className="card-text">$32.00-$20.99</p>
                      <div className="card-text">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="img-transparent d-none d-md-block d-lg-block">
              <img
                src="https://ormado.webluna.org/cdn/img/accoerdion.png"
                alt=""
              />
              <div className="img-background"></div>
              <div className="img-text-context">
                <h4>BEST DEALS</h4>
                <h2>Sale of the Month</h2>
                <button>
                  Shop now <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
            <div className="sort-divs d-lg-flex d-md-flex mt-lg-5 mt-md-5 mb-3">
              <div className="sort-by-featured ">
                <label for="">Sort by:</label>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Featured</option>
                </select>
              </div>
              <p>Showing 1-8 of 20 result</p>
              <p>Showing: 8</p>
              <div className="ep_menu">
                <img
                  src="https://ormado.webluna.org/cdn/img/ep_menu.png"
                  alt="ep-menu"
                />
              </div>
            </div>
            <div className="product-cards d-none d-md-block d-lg-block p-0">
              <Row className="g-3">
                {product.map((item) => (
                  <Col className="col-sm-6 col-md-6 col-lg-3 product-card-main d-flex justify-content-center mb-5">
                    <Card className="card p-3 mt-5" key={item._id}>
                      <Card.Img
                        className="card-rentagle"
                        src="https://ormado.webluna.org/cdn/img/Rectangle.png"
                      />
                      <Card.Img
                        className="card-ellipse"
                        src="https://ormado.webluna.org/cdn/img/Ellipse.png"
                      />
                      <Link to={`/product/${item.title}`}>
                        <Card.Img
                          className="card-energy"
                          src="https://ormado.webluna.org/cdn/img/energydrink.png"
                        />
                      </Link>
                      <Card.Img
                        className="card-vector"
                        src="https://ormado.webluna.org/cdn/img/Vector.png"
                      />
                      <Card.Img
                        className="card-vector1"
                        src="https://ormado.webluna.org/cdn/img/Vector%201.png"
                      />
                      <Card.Img
                        className="card-vector2"
                        src="https://ormado.webluna.org/cdn/img/Vector%201.png"
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>${item.lastPrice}.00</Card.Text>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn-card me-1"
                            onClick={()=>{dispatch(add(item))}}
                          >
                            <img
                              src="https://ormado.webluna.org/cdn/img/Heart.png"
                              className="btn-img"
                              alt="Add to Wishlist"
                            />
                          </button>
                          <button className="btn-card me-1" onClick={()=>{dispatch(addToCart(item))}}>
                            <img
                              src="https://ormado.webluna.org/cdn/img/Shopbag.png"
                              className="btn-img"
                            />
                          </button>
                          <button className="btn-readmore">Read More</button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="img-transparent">
              <img
                src="https://ormado.webluna.org/cdn/img/accoerdion.png"
                alt=""
              />
              <div className="img-background"></div>
              <div className="img-text-context">
                <h4>BEST DEALS</h4>
                <h2>Sale of the Month</h2>
                <button>
                  Shop now <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
            <div className="product-cards p-0">
              <Row className="g-3">
                {product.map((item) => (
                  <Col className="col-sm-6 col-md-6 col-lg-3 product-card-main d-flex justify-content-center mb-5">
                    <Card className="card p-3 mt-5" key={item._id}>
                      <Card.Img
                        className="card-rentagle"
                        src="https://ormado.webluna.org/cdn/img/Rectangle.png"
                      />
                      <Card.Img
                        className="card-ellipse"
                        src="https://ormado.webluna.org/cdn/img/Ellipse.png"
                      />
                      <Card.Img
                        className="card-energy"
                        src="https://ormado.webluna.org/cdn/img/energydrink.png"
                      />
                      <Card.Img
                        className="card-vector"
                        src="https://ormado.webluna.org/cdn/img/Vector.png"
                      />
                      <Card.Img
                        className="card-vector1"
                        src="https://ormado.webluna.org/cdn/img/Vector%201.png"
                      />
                      <Card.Img
                        className="card-vector2"
                        src="https://ormado.webluna.org/cdn/img/Vector%201.png"
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>${item.lastPrice}.00</Card.Text>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn-card me-1"
                            onClick={()=>{dispatch(add(item))}}
                          >
                            <img
                              src="https://ormado.webluna.org/cdn/img/Heart.png"
                              className="btn-img"
                              alt="Add to Wishlist"
                            />
                          </button>
                          <button className="btn-card me-1">
                            <img
                              src="https://ormado.webluna.org/cdn/img/Shopbag.png"
                              className="btn-img"
                            />
                          </button>
                          <button className="btn-readmore">Read More</button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
           
            <div className="feature-product d-block d-md-none d-lg-none">
              <h5>Feature Product</h5>
              <div className="feature-card d-flex mb-3">
                <div className="img-div-first">
                  <img
                    src="https://ormado.webluna.org/cdn/img/drink2.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="text-div-second">
                  <div className="card-body-test">
                    <h5 className="card-title">Ormado Energy Drink</h5>
                    <p className="card-text">$32.00-$20.99</p>
                    <div className="card-text">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="feature-card d-flex mb-3"
                style={{
                  boxShadow: "0px 0px 12px 0px rgba(32, 181, 38, 0.32)",
                }}
              >
                <div className="img-div-first">
                  <img
                    src="https://ormado.webluna.org/cdn/img/drink2.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="text-div-second">
                  <div className="card-body-test">
                    <h5 className="card-title">Ormado Energy Drink</h5>
                    <p className="card-text">$32.00-$20.99</p>
                    <div className="card-text">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-card d-flex mb-3">
                <div className="img-div-first">
                  <img
                    src="https://ormado.webluna.org/cdn/img/drink2.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="text-div-second">
                  <div className="card-body-test">
                    <h5 className="card-title">Ormado Energy Drink</h5>
                    <p className="card-text">$32.00-$20.99</p>
                    <div className="card-text">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faqs />
      </section>
    </>
  );
};

export default Product;
