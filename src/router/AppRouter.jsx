import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Contact from '../pages/Contact'
import Career from '../pages/Career'
import Product from '../pages/Product'

const AppRouter = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/contact' element={<Contact/>}></Route>
    <Route  path='/career' element={<Career/>}></Route>
    <Route  path='/product' element={<Product/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )   
}
 
export default AppRouter