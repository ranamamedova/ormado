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
import Nutrition from '../pages/Nutrition'
import SignIn from '../pages/SignIn'
import Layout from '../components/Layout'
import { useState } from 'react'

const AppRouter = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route  path='/' element={<Layout/>}>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/contact' element={<Contact/>}></Route>
    <Route  path='/contact' element={<Contact/>}></Route>
    <Route  path='/career' element={<Career/>}></Route>
    <Route  path='/product' element={<Product/>}></Route>
    <Route  path='/ourstory' element={<OurStory/>}></Route>
    <Route  path='/franchise' element={<Franchise/>}></Route>
    <Route  path='/reserve' element={<Reserve/>}></Route>
    <Route  path='/searchbranch' element={<SearchBranch/>}></Route>
    <Route  path='/nutrition' element={<Nutrition/>}></Route>
    </Route>
    
    <Route  path='/signin' element={<SignIn />}></Route>
    <Route  path='/signup' element={<SignIn   />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )   
}
 
export default AppRouter