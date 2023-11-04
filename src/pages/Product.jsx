import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'

const Product = () => {

  return (
    <>
    <BreadCrumb title="PRODUCT DETAILS"/>
    <NavLink to="/nutrition">
      Nutrition
    </NavLink>
    </>
  )
}

export default Product