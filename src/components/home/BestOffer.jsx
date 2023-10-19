import React from 'react'
import cardmain from "./imgs/Rectangle_bestOffer.png"
import cardimg from "./imgs/bestOfferCard1.png"


const BestOffer = () => {
  return (
    <div className='best-offer mt-5 p-5'>
      <div className="container1 mt-3 pt-5">
        <div className="text">
          <p className='text-header'><b>GET THE BEST <span>OFFER</span></b></p>
          <p className='text-part2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
        </div>
        <div className="cards row">

          <div className="card col-lg-5 col-md-9  mt-4">
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
            
          </div>

          <div className="card-column card col-md-7 mb-4 mt-3 ">
          <div className="btn-arrow  mb-5 ">
          <button type="button" className="btn active me-2" data-bs-toggle="button" aria-pressed="true"><i class="fa-solid fa-arrow-left"></i></button>
          <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true"><i class="fa-solid fa-arrow-right"></i></button>
        </div>

            <div className="row">
              <div className="col-md-3 col-lg-3 pb-1">
                <img src={cardimg} className="img-fluid rounded-start m-2" alt="..." />
              </div>
              <div className="col-md-9 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <div className="card-text-main">
                    <h3 className="card-title"><b>Coffee Cake</b></h3>
                    <div className="line col-sm-6">
                      <div className="line-main col-sm-12 "></div>
                    </div>
                    <div className="card-price">
                      <b><i>$ </i>20</b>
                    </div>
                  </div>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-lg-3 py-4">
                <img src={cardimg} className="img-fluid rounded-start m-2" alt="..." />
              </div>
              <div className="col-md-9 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <div className="card-text-main">
                    <h3 className="card-title"><b>Coffee Cake</b></h3>
                    <div className="line col-sm-6 px-3">
                      <div className="line-main col-sm-12 "></div>
                    </div>
                    <div className="card-price">
                      <b><i>$ </i>20</b>
                    </div>
                  </div>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                </div>
              </div>
            </div>
            <div className="row  mb-5">
              <div className="col-md-3 col-lg-3">
                <img src={cardimg} className="img-fluid rounded-start m-2" alt="..." />
              </div>
              <div className="col-md-9 d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <div className="card-text-main">
                    <h3 className="card-title"><b>Coffee Cake</b></h3>
                    <div className="line col-sm-6 px-3">
                      <div className="line-main col-sm-12 "></div>
                    </div>
                    <div className="card-price">
                      <b><i>$ </i>20</b>
                    </div>
                  </div>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default BestOffer