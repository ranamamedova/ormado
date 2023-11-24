import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
// import Navbar from '../components/Navbar'
import Contact from '../pages/Contact'
import Career from '../pages/Career'
import Product from '../pages/Product'
import OurStory from '../pages/OurStory'
import Franchise from '../pages/Franchise'
import Reserve from '../pages/Reserve'
import SearchBranch from '../pages/SearchBranch'
// import Footer from "../components/home/Footer"
import Nutrition from '../pages/Nutrition'
import SignIn from '../pages/SignIn'
import Layout from '../components/Layout'
// import { useState } from 'react'
import CreateAccount from '../pages/CreateAccount'
import Category from '../pages/Category'
import Pagination from '../components/Pagination'
import Gallery from '../pages/Gallery'
import ProductDetails from '../pages/ProductDetails'
import FranchiseForm from '../pages/FranchiseForm'
import MyAccount from '../pages/admin/MyAccount'

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
    <Route  path='/productdetails' element={<ProductDetails/>}></Route>
    <Route  path='/ourstory' element={<OurStory/>}></Route>
    <Route  path='/franchise' element={<Franchise/>}></Route>
    <Route  path='/reserve' element={<Reserve/>}></Route>
    <Route  path='/searchbranch' element={<SearchBranch/>}></Route>
    <Route  path='/nutrition' element={<Nutrition/>}></Route>
    <Route  path='/category' element={<Category/>}></Route>
    <Route  path='/gallery' element={<Gallery />}></Route>
    <Route  path='/pagination' element={<Pagination/>}></Route>
    <Route  path='/gallery' element={<Gallery />}></Route>
    <Route  path='/productDetails' element={<ProductDetails />}></Route>
    <Route  path='/franchiseform' element={<FranchiseForm />}></Route>
    <Route  path='/myaccount' element={<MyAccount />}></Route>

    </Route>
    
    <Route  path='/signin' element={<SignIn />}></Route>
    <Route  path='/signup' element={<CreateAccount />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )   
}
 
export default AppRouter