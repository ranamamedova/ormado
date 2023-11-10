import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

const Contact = () => {
  const location = useLocation()
  const [login,setLogin] = useState(false)
  const email = localStorage.getItem("userEmail")
  const password = localStorage.getItem("userPassword")
  const navigate = useNavigate()
  useEffect(() => {
    if (email && password) {
      setLogin(true);
    } else {
      setLogin(false);
      if (location.pathname === '/contact') {
        navigate('/signin');
      }
    }
  }, []);
  return (
    <>
   <div>
    Contact
   </div>
  </>
  )
}

export default Contact