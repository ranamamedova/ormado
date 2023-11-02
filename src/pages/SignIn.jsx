import React from 'react'
import login from "../assets/img/login.png"
import logo from "../assets/img/logo.png"
const SignIn = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-5">
                <img src={login} alt=""  className='img-fluid my-5'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignIn