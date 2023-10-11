import React from 'react' ;
import coffeImg from "../img/img.png"
import beans from "../img/beans2.png"
const EnjoyNewCoffe = () => {
  return (
   <>
   <div className="container-fluid" >
    <div className="row">
    <div className="col-12 col-sm-12 col-md-12 col-lg-5 coffeImgContainer">
     <div className="coffeImg">
        <img src={coffeImg} alt="" className='img-fluid' />
        <div className="coffeModal">
            <div className="coffeModalText mt-4 ms-3">
            <h6>
            Get Some Offer
            </h6>
            </div>
        </div>
        <div className='beans'>
            <img src={beans} alt="" />
        </div>
      </div>
     </div>
     <div className="col-12 col-sm-12 col-md-12 col-lg-6  ms-5 coffeImgContainer1">
        <div className="enjoyCoffeDesc">
          <h6 className='enjoyCoffeDesch6'>
          OUR COFFEE
          </h6>
          <div>
             <div className='enjoyCoffeTitleDesc'>
                    <h1>
                    Enjoy a new blend of coffee style
                    </h1>
             </div>
          </div>
        </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default EnjoyNewCoffe