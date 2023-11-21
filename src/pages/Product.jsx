import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'


const Product = () => {

  return (
    <>
    <BreadCrumb title="PRODUCT"/>
    <NavLink to="/nutrition">
      Nutrition
    </NavLink>
    <hr/>
    <NavLink to="/productdetails">ProductDetails</NavLink>
    </>
  )
}

export default Product