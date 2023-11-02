import React from 'react'
import inner from "../assets/img/inner.png"
import footicon from "../assets/img/franchiseicon.png"
const Franchise = () => {
  return (


    <div className="MyFranchise">

      <div className="container">
        <div className="row justify-content-center">


          <div className="leftbox col-6">

            <div className="innerbox">
              <h1>WHY
                ORMADO
                FRANCHISE ?</h1>

               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                
              <div className="footicon">
                
             <img src={footicon} alt="" />

             <h6>INQUIRE NOW</h6>
              </div>

              



            </div>
          </div>

          <div className="rightbox col-6">
            <div className="innerbox2">
              <img width={50} height={50} src={inner} alt="" />
            </div>
          </div>



        </div>
      </div>

    </div>



  )
}

export default Franchise