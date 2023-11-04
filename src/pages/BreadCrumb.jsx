import React from 'react'
import breadcrumb from "../assets/img/breadcrumb.png"
const BreadCrumb = ({title}) => {
  return (
   <>
    <section className="breadCrumb">
        <img src={breadcrumb} alt="" className='img-fluid' />
        <div className="title">
            <h3>{title}</h3>
        </div>
    </section>
   </>
  )
}

export default BreadCrumb