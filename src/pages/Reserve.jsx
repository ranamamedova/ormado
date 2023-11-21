import React from 'react'
import BreadCrumb from "../pages/BreadCrumb"
const Reserve = () => {
  return (
    <>
    <BreadCrumb title={"Reserve"}/>
    {/* <div className="reserve my-5">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
             <div className="image-coffee" >
              <img src={require('../assets/img/sidenav-bg0.2.png')} alt="" />
             </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 ">
              <div className="unicorn ms-2">
              <div className="reserve-form  ">
              <p className='heading mt-5'>Reserve a table</p>
              <p>Full name</p>
                <input type="text" placeholder=' Enter your name'/>
                <p>Email or phone number</p>
                <input type="email" placeholder=' Type your e-mail or phone number'/>
                <p>Phone number</p>
                <input type="number" name="" id="" placeholder=' Enter your phone'/>
                <p>Number of guests</p>
                <input type="number" placeholder=' 6-7' min={1} max={7}/>
                <p>Date</p>
                <input type="date" name="" id="" placeholder=' Choose date'/>
                <p>Time</p>
                <input type="time" name="" id="" placeholder=' 00:00'/>
                <p>Branch</p>
                <select id="cars" name="cars">
                  <option value="Ormado Kaffeehaus Berlin | Einbecker">Ormado Kaffeehaus Berlin | Einbecker</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
                <p>Additional of remarks</p>
                <input type="text" placeholder=' Enter additional remarks'/>

                <div className="radio d-flex my-2">
                 <div className="step ">
                  <input type="radio" name="" id="" />
                  <p>The purpose of the meeting</p>
                 </div>
                 <div className="step">
                  <input type="radio" name="" id="" />
                  <p>For a meeting with friends</p>
                 </div>
                </div>
                <button className="coffee d-flex ">
                  <img src={require('../assets/img/Vector 1.png')} alt="" />
                  <img src={require('../assets/img/Vector 2.png')} alt="" />
                  <p>Reserve</p>
                  <img src={require('../assets/img/Vector 3.png')} alt="" />
                  <img src={require('../assets/img/Vector 4.png')} alt="" />
                </button>
            </div>
              </div>
              </div>
                
        </div>
    </div> */}
    </>
  )
}

export default Reserve