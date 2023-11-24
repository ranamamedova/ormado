import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'
// import Pagination from '../components/Pagination'



const Product = () => {



  return (
    <>
    <BreadCrumb title="PRODUCT DETAILS"/>
    <NavLink to="/nutrition">
      Nutrition
    </NavLink>
 
  {/* <Pagination/> */}
    </>
  )
}

export default Product