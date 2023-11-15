import React, { useEffect, useState } from 'react'
import story from "../assets/img/ourstory.png"
import blast from "../assets/img/blast.png"
import Ormadolocation from "../components/Ormadolocation"
import ormadoImg from "../assets/img/ormado.png"
import icon from "../assets/img/pngwing3.png"
import blastLeft from "../assets/img/coffee_blast.png"
import blastRight from "../assets/img/coffee_blast2.png"
import Watch from "../components/Watch"
import gallerydata from '../data/galleryData'
const OurStory = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setCurrentItems(gallerydata.slice(itemOffset, endOffset));
  }, [itemOffset]);
  return (

    <>
  <div className="container-fluid ">
    <div className="ourstory-section1">
    <div className="ourstory-img">
      <img src={ormadoImg} alt="error" className='img-fluid'/>
    </div>
    <div className="ourstory-main ">
      <img src={blastLeft} alt="error" className='blastLeft'/>
      <h1>OUR STORY</h1>
      <img src={icon} alt="error" className='my-3'/>
      <div className="ourstory-main-text">
        <p>Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already developed and refined our business models not only in the German capital, and also in Baku, Odessa, and Dubai. We have tested various strategies, products, and services to determine what works best across different locations. For us, is important to analyze and understand the cultural needs and mindset. We believe coffee is not only coffee and all is already well if you have a coffee in a cozy atmosphere. In all of our coffee shops, we play jazz, prepare delicious coffee of our own production, and treat our customers with waffles. And not only waffles. Our menu includes a selection of premium coffees, hot and cold drinks, and desserts - including vegan options. Come & visit us!</p>
      </div>
      <img src={blastRight} alt="" className='blastRight'/>
    </div>
    </div>
    <div className="ourstory-section2">
      <h1 className='mb-4'><span>Roasting</span> House</h1>
      <div className="ourstory-section2-text">
        <p>Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already developed and refined our business models not only in the German capital, and also in Baku, Odessa, and Dubai. We have tested various strategies, products, and services to determine what works best across different locations. For us, is important to analyze</p>
      </div>
    </div>
    <Watch />
    <div className="ourstory-section3 mb-5">
        <div className="ourstory-section3-cards mb-5">
          <div className="ourstory-section3-cardmain mb-5">
            {currentItems.slice(0,4).map((item,index)=>(
              <div className={`card-img ${
                index % 2 === 1 ? "mt-5 pt-5" : "mt-0"
              }`} >
              <img src={item.photo} alt="error" />
              </div>
            ))}
          </div>
        </div>
    </div>
    <Ormadolocation/>
    <div className="ourstory-section4">
      <div className="ourstory-section4-text1">
        <h1 className='mb-2'>MISSION</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </div>
      <div className="ourstory-section4-text2 mt-5">
        <h1 className='mb-2'>VISION</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default OurStory