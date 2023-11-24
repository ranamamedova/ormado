import React from "react";
import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
const MyAccount = () => {
  const location = useLocation();
  const [login, setLogin] = useState(false);
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");
  const navigate = useNavigate();
  useEffect(() => {
    if (email && password) {
      setLogin(true);
    } else {
      setLogin(false);
      if (location.pathname === "/myaccount") {
        navigate("/signin");
      }
    }
  }, []);
  
  const logoutFunc =()=>{
    localStorage.clear() ;
    navigate('/')
  }
  return (
    <>
      <section className="myaccount">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-3 bg-warnding">
              <div className="accountBox">
                <div className="title">
                  <h3>
                    Hello,<span>Tamerlan</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-8 bg-primary mt-4">
              <div className="formDetails">
                <form>
                  <p>EDIT ACCOUNT INFORMATION</p>
                </form>
                <div className="row">
                  <div className="col-6 bg-warning">
                    <input type="text" className="w-100" />
                  </div>
                  <div className="col-6 bg-warning">
                    <input type="text" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
       onClick={logoutFunc}
      >Log out</button>
    </>
  );
};

export default MyAccount;
