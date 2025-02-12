import React, { useEffect, useState } from 'react'
import Ormadolocation from "../pages/Ormadolocation"
import Watch from "../components/Watch"
import gallerydata from '../data/galleryData'
import FAQ from "../components/Faqs"
import axios from 'axios'
import ScrollToTop from '../components/ScrollToTop'


const OurStory = () => {
   const [data,setData] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    setCurrentItems(gallerydata.slice(itemOffset, endOffset));
    axios.get("https://ormadoapi.webluna.org/api/client/about")
    .then((res)=>{
      console.log(res.data.data)
      setData(res.data.data[0])
    }) 
    
    .catch((err)=>{
      console.log(err)
    })
  }, [itemOffset]);
  return (

    <>
        <ScrollToTop/>
  <div className="container-fluid ">
    <div className="ourstory-section1">
    <div className="ourstory-img">
     
           <img src={data.image} alt="error" className='img-fluid tex'/>
     
    </div>
    <div className="ourstory-main ">
      <img src="https://ormado.webluna.org/cdn/img/blast.png" alt="error" className='blastLeft'/>
      <h1>{data.headerText}</h1>
      <img src="https://ormado.webluna.org/cdn/img/pngwing3.png" alt="error" className='my-3'/>
      <div className="ourstory-main-text">
        <p>{data.text}</p>
      </div>
      <img src="https://ormado.webluna.org/cdn/img/coffee_blast2.png" alt="" className='blastRight'/>
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
    <div className="ourstory-section5 ">
      <div className="ourstory-section5-cards ">
        <div className="card-part1 mt-4">
          
            <div className="background-black"></div>
            <img  src="https://ormado.webluna.org/cdn/img/ImageOurstory.png" alt="" />
            <div className="card-main">
              <img src="https://ormado.webluna.org/cdn/img/VectorOurstory.svg" alt="error" />
               
            </div>
          </div>
      </div>
      <div className="ourstory-section5-text">
        
          <h1 className='mb-5 ms-5'>WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION</h1>
          <div className="text-main mb-5">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
        <div className="text-number mt-4">
          <div className="experience">
            <h2 className='mb-3'>15Y</h2>
            <p>Experience</p>
          </div>
          <div className="bestteam">
            <h2 className='mb-3'>25+</h2>
            <p>Best Team</p>
          </div>
          <div className="totalclient">
            <h2 className='mb-3'>500+</h2>
            <p>Total Client</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <FAQ />
  </>
  )
}

export default OurStory