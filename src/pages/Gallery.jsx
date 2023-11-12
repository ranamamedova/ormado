import React, { useState } from 'react'
import gallerydata from '../data/galleryData'
import Breadcrumb from "../pages/BreadCrumb"

const Gallery = () => {
    const [visible,setVisible] = useState(7)
    const func =()=>{
        setVisible(fd => fd +=3)
    }

  return (
    <>
        <Breadcrumb title="Gallery" />
        <div className="roasting-house">
            <div className="rosdting-house-header">
              <h1 className='pt-5'>Ormado Roasting House</h1>
              <h5 className='pb-5'>{visible} Photos</h5>
            </div>
            <div className="roasting-house-cards">
                <div className="roasting-house-cardmain container">
                {gallerydata.slice(0,visible).map((item)=>(
                        <div className="card-img">
                            <img src={item.photo} alt="error" />
                        </div>
                ))}
                </div>
                <div className="roasting-house-button ">
                    <button className='mt-5' onClick={func}> See More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery