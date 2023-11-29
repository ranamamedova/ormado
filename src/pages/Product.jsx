import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
import accoerdian from '../assets/img/accoerdion.png'
import SingleProduct from '../components/SingleProduct'
import ep_menu from '../assets/img/ep_menu.png'
import drink from "../assets/img/drink.png";
import drink1 from "../assets/img/drink1.png";
import drink2 from "../assets/img/drink2.png";
import RangeSlider from '../components/RangeSlider'

const Product = () => {
  const [showCategories, setShowCategories] = useState(true);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  const [value, setValue] = useState({ min: 0, max: 100 });

  return (
    <>
      <section className='container'>
        <div className="products-page row">
          <div className="col-md-3">
            <div >
              <div className="categories-headline d-flex align-items-center justify-content-between" onClick={toggleCategories}>
                <h5>All Categories</h5>
                <i className={`fa-solid ${showCategories ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div >
              <div className={`categories ${showCategories ? 'open' : 'closed'}`}>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="radio" />
                  <label>Hot Drinks (25)</label>
                </div>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="radio" />
                  <label>Cold Drinks (150)</label>
                </div>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="radio" />
                  <label>Sweets (54)</label>
                </div>
                <div className='hot-drinks d-flex'>
                  <input type="radio" name="" id="radio" />
                  <label>Merchandise (47)</label>
                </div>
              </div>
              <div className='price-slider'>
                <div className="price-slider-headline d-flex align-items-center justify-content-between">
                  <h5>Price</h5>
                  <i className='fa-solid fa-chevron-up'></i>
                </div>
                <RangeSlider min={0} max={100} step={5} value={value} onChange={setValue} />
                <p>Price: <span>{value.min}</span> - <span className='value-max'>{value.max}</span></p>
              </div>
              {/* <div className="feature-product">
                <div className="coffeModal pb-3">
                  <div className="modelDrinkBox">
                    <div className="d-flex">
                      <div className="img">
                        <img src={drink} alt="" />
                      </div>
                      <div className="modalDrinkText">
                        <p>
                          Ormado Energy Drink <a href="#react">Get code</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modelDrinkBox">
                    <div className="d-flex">
                      <div className="img">
                        <img src={drink1} alt="" />
                      </div>
                      <div className="modalDrinkText">
                        <p>
                          Ormado Energy Drink <a href="#react">Get code</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modelDrinkBox">
                    <div className="d-flex">
                      <div className="img">
                        <img src={drink2} alt="" />
                      </div>
                      <div className="modalDrinkText">
                        <p>
                          Ormado Energy Drink <a href="#react">Get code</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="feature-product">
                <div className="card mb-3" >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={drink} className="img-fluid rounded-start" alt="..." />
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
                <div className="card mb-3" >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={drink1} className="img-fluid rounded-start" alt="..." />
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
                <div className="card mb-3" >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={drink2} className="img-fluid rounded-start" alt="..." />
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
          </div>
          <div className="col-md-9">
            <div className='img-transparent'>
              <img src="https://ormado-demo.webluna.space/cdn/img/accoerdion.png" alt="" />
              <div className='img-background'></div>
              <div className='img-text-context'>
                <h4>BEST DEALS</h4>
                <h2>Sale of the Month</h2>
                <button>Shop now <i className="fa-solid fa-arrow-right ms-2"></i></button>
              </div>
            </div>
            <div className="sort-divs d-flex align-items-center justify-content-between mt-5 mb-3">
              <div className="sort-by-featured d-flex">
                <label for="">Sort by:</label>
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Featured</option>
                </select>
              </div>
              <p>Showing 1-8 of 20 result</p>
              <p>Showing: 8</p>
              <div className='ep_menu'>
                <img src={ep_menu} alt="ep-menu" />
              </div>
            </div>
            <div className="products">
              <SingleProduct />
            </div>
            <div className='img-transparent'>
              <img src={accoerdian} alt="" />
              <div className='img-background'></div>
              <div className='img-text-context'>
                <h4>BEST DEALS</h4>
                <h2>Sale of the Month</h2>
                <button>Shop now <i className="fa-solid fa-arrow-right ms-2"></i></button>
              </div>
            </div>
            <div className="products">
              <SingleProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product