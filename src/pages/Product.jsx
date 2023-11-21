import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
import accoerdian from '../assets/img/accoerdion.png'
import SingleProduct from '../components/SingleProduct'

const Product = () => {

  return (
    <>
      <section className='container'>
        <div className="products-page row">
          <div className="col-md-3">dskjfshks</div>
          <div className="col-md-9">
            <div className='img-transparent'>
              <img src={accoerdian} alt="" />
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
              <div className='showing d-flex align-items-center justify-content-between'>
                <p>Showing 1-8 of 20 result</p>
                <p>Showing: 8</p>
              </div>
              <div>
                <p>sdghsogs</p>
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