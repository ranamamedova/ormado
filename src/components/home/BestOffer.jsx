import React, {  useState } from 'react'
import bestofferData from '../../data/bestofferData'



const BestOffer = () => {

  const [index, setindex] = useState(0);
  const n = 3;



  const nextSlide = () => {
    const newIndex = index + n;
    if (newIndex < bestofferData.length) {
      setindex(newIndex);
    }
  };


  const prevSlide = () => {
    const newIndex = index - n;
    if (newIndex >= 0) {
      setindex(newIndex);
    }
  };


  return (
    <div className='best-offer mt-5 p-5'>
      <div className="container1 mt-3 pt-5">
        <div className="text">
          <p className='text-header'><b>GET THE BEST <span>OFFER</span></b></p>
          <p className='text-part2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
        </div>
        <div className="btn-arrow">
          <button onClick={prevSlide} disabled={index === 0}><i className="fa-solid fa-arrow-left "></i></button>
          <button onClick={nextSlide} disabled={index + n >= bestofferData.length}><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        <div className="cards row">
          
          <div className="card-part1 ms-3">
            <div className="background-black"></div>
            <div className="card-main">
                <div className="card-main-text">
                  <h1> Coffee Time <br /></h1>
                  <h3><i className='me-2'>30%</i>  OFF</h3>
                  <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                  <button className='mt-3'><b>Order Now</b> <i class="fa-solid fa-arrow-right ms-2"></i> </button>
                </div>
            </div>
          </div>

          {/* <div className="card col-lg-5 col-md-9  mt-4">
          <img src={cardmain} className="card-img" alt="error" />
            <div className="card-background card">
            </div>
              <div className="card-text">
              <div className="card-img-overlay mt-5 ms-5">
                <h1> Coffee Time <br /></h1>
                <h3><i>30%</i>  OFF</h3>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                <button className='mt-5 px-5 py-2'><b>Order Now</b> <i class="fa-solid fa-arrow-right ms-2"></i> </button>
              </div>
              </div>
            
          </div> */}
          

          <div className="card-column card col-md-7 ">
          
            <div className="row" data-aos="fade-left">
              {bestofferData.slice(index, index + n).map((item,i)=>(
                <div className='card-part2'>
                <div className="card-img col-md-3 col-lg-3 " >
                 <img src={item.photo} className="img-fluid rounded-start m-1" alt="..." />
                </div>
                <div className="card-body col-md-8 d-flex align-items-center justify-content-center">
                <div className="card-body-main">
                  <div className="card-text-main">
                    <h4 className="card-title"><b>{item.title}</b></h4>
                    <div className="line mx-2">
                      <div className="line-main "></div>
                    </div>
                    <div className="card-price">
                      <b><i>$ </i>{item.price}</b>
                    </div>
                  </div>
                  <p className="card-text">{item.desc}</p>

                </div>
              </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestOffer