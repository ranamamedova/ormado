import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Product from "./pages/Product";
import OurStory from "./pages/OurStory";
import Franchise from "./pages/Franchise";
import Reserve from "./pages/Reserve";
import SearchBranch from "./pages/SearchBranch";
import Nutrition from "./pages/Nutrition";
import CreateAccount from "./pages/CreateAccount";
import Category from "./pages/Category";
import Pagination from "./components/Pagination";
import Gallery from "./pages/Gallery";
import ProductDetails from "./pages/ProductDetails";
import FranchiseForm from "./pages/FranchiseForm";
import MyAccount from "./pages/admin/MyAccount";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import BlogDetails from "./pages/BlogDetails";
import WishlistPage from "./pages/WishlistDetail";
import Checkout from "./pages/Checkout";

import { ProductProvider } from "./context/ProductContext";
import { BlogProvider } from "./context/BlogContext";
import { FaqProvider } from "./context/FaqContext";
import MyOrder from "./pages/MyOrder";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <BlogProvider>
            <FaqProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/career" element={<Career />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route
                  path="/product/:slug"
                  element={<ProductDetails />}
                ></Route>
                <Route path="/ourstory" element={<OurStory />}></Route>
                <Route path="/franchise" element={<Franchise />}></Route>
                <Route path="/reserve" element={<Reserve />}></Route>
                <Route path="/searchbranch" element={<SearchBranch />}></Route>
                <Route path="/nutrition" element={<Nutrition />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/category/:slug" element={<BlogDetails />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
                <Route path="/pagination" element={<Pagination />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/myorder" element={<MyOrder />}></Route>
                <Route
                  path="/franchiseform"
                  element={<FranchiseForm />}
                ></Route>
                <Route path="/myaccount" element={<MyAccount />}></Route>
                <Route
                  path="/wishlistdetail"
                  element={<WishlistPage />}
                ></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<CreateAccount />}></Route>
              </Routes>
              <Footer />
            </FaqProvider>
          </BlogProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
