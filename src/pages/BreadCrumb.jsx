import React from 'react'
import breadcrumbdetails from "../assets/img/breadcrumbdetails.png"
import breadcrumb from "../assets/img/breadcrumb.png"
const BreadCrumb = ({title,isOtherPage}) => {
  
    const changeImage = isOtherPage ? breadcrumbdetails : breadcrumb  
 

  return (
   <>
    <section className="breadCrumb">
        <img src={changeImage} alt="" className='img-fluid' />
        <div className="title">
            <h3>{title}</h3>
        </div>
    </section>
   </>
  )
}

export default BreadCrumb