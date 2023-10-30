import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Contact from '../pages/Contact'
import Career from '../pages/Career'
import Product from '../pages/Product'
import OurStory from '../pages/OurStory'
import Franchise from '../pages/Franchise'
import Reserve from '../pages/Reserve'
import SearchBranch from '../pages/SearchBranch'
import Footer from "../components/home/Footer"

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
    <Route  path='/ourstory' element={<OurStory/>}></Route>
    <Route  path='/franchise' element={<Franchise/>}></Route>
    <Route  path='/reserve' element={<Reserve/>}></Route>
    <Route  path='/searchbranch' element={<SearchBranch/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )   
}
 
export default AppRouter