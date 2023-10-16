import React from 'react'
import EnjoyNewCoffe from './EnjoyNewCoffe'
import OrmadoKaffeSwiper from './OrmadoKaffeSwiper'
import Payments from './Payments'
import Navbar from "../components/Navbar"
import TestDetails from './TestDetails'

const Home = () => {
  return (

    
    <>
    <Navbar/>
  <OrmadoKaffeSwiper/>
  <EnjoyNewCoffe/>
  <Payments/>
    <TestDetails/>
  </>

  )
}

export default Home