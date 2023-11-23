import React from 'react'
import inner from "../assets/img/inner.png"
import footicon from "../assets/img/franchiseicon.png"
import lefticon from "../assets/img/leftside.png"
import rightlife from "../assets/img/rightlifw.png"
import TestDetails from '../components/TestDetails'
import Watch from '../components/Watch'
import Faqs from "../components/Faqs"
import { Link } from 'react-router-dom'
import Ormadolocation from "../pages/Ormadolocation"


const Franchise = () => {
  return (


    <>
      <div className="MyFranchise ">

        <div className="width-mysize mybox">
          <div className="container">
            <div className="row ">




              <div className="leftbox col-6">
                <div className="innerbox">
                  <img src={rightlife} alt="" className='img-fluid image-one' />
                  <div className="innerbox1">
                    <h1>Why <br /> <span className='Ormado'>Ormado</span> <br />Franchise ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

               <Link to="/franchiseform" className='footicon'>
               {/* <div className="footicon" style={{"cursor":"pointer"}}> */}
                      <img className='img-fluid foot' src={footicon} alt="" />
                      <h5>INQUIRE NOW</h5>
                    {/* </div> */}
               </Link>

                  </div>
                  <img src={lefticon} alt="" className='img-fluid lefticon' />


                </div>

              </div>

              <div className="rightbox col-6">
                <div className="innerbox2">
                  <img className='lastimage img-fluid' src={inner} alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
      <TestDetails />
      <Watch />
      <Ormadolocation/>
      <Faqs />


    </>



  )
}

export default Franchise