import React from 'react'
import { Link } from 'react-router-dom'
import login from "../assets/img/login.png"
import logo from "../assets/img/logo.png"
const SignIn = () => {
  return (
    <>
        <section className="singin">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-5  ">
                <div className="signImg">
                <img src={login} alt=""  className='img-fluid'/>
                <div className="logoTitle ">
                 <div className="logoImg">
                 <Link to="/">
                 <img src={logo} alt="" className='mt-3 mb-5'  />
                 </Link>
                 </div>
                   <h2 >
                   WELCOME TO ORMADO KAFFEEHAUS
                   </h2>
                </div>
                </div>
                </div>
                <div className="col-12 col-sm-5 " >
                <div className="formBox">
                <div className="formTitle">
                <h5>Welcome back!</h5>
                <p>Meet the good taste today</p>
                </div>
                  <form >
                     
                  </form>
                </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default SignIn