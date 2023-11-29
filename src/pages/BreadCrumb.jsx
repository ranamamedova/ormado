import React from 'react'
// import breadcrumbdetails from "../assets/img/breadcrumbdetails.png"
const BreadCrumb = ({title,isOtherPage}) => {
  
    const changeImage = isOtherPage ? "https://ormado-demo.webluna.space/cdn/img/breadcrumbdetails.png" : "https://ormado-demo.webluna.space/cdn/img/breadcrumb.png"  
 

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