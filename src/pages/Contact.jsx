import React from "react";
import Locationincontact from "./Locationincontact";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router";


const Contact = () => {
  // const location = useLocation();
  // const [login, setLogin] = useState(false);
  // const email = localStorage.getItem("userEmail");
  // const password = localStorage.getItem("userPassword");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (email && password) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //     if (location.pathname === "/contact") {
  //       navigate("/signin");
  //     }
  //   }
  // }, []);
  return (

  
    <>
      {/* {
        login && <div>
        <iframe
          src="https://my.atlist.com/map/f77aa50c-84cd-47b8-a0e1-8b31387435e8?share=true"
          allow="geolocation 'self' https://my.atlist.com/"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
      } */}
      <Locationincontact/>
    </>

    
  );
};

export default Contact;
