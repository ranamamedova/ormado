import React from "react";
import EnjoyNewCoffe from "./EnjoyNewCoffe";
import OrmadoKaffeSwiper from "./OrmadoKaffeSwiper";
import ProductCards from "./ProductCards";
import Payments from "./Payments";
import Navbar from "../components/Navbar";
import TestDetails from "./TestDetails";
import Franchise from "./Franchise";
import Blog from "./Blog/Blog";



import Cakes from "./Cakes";
import WhyUs from "./home/WhyUs";
import BestOffer from "./home/BestOffer"
import NewSweets from "./home/NewSweets"
import Footer from "./home/Footer";
import Faqs from "./Faqs";
const Home = () => {
  return (
    <>
     
      <Navbar />
      <OrmadoKaffeSwiper />
      <EnjoyNewCoffe />
      <ProductCards/>
      <Payments />
      <TestDetails />
      <Payments />
      <WhyUs />
      <BestOffer />
      <NewSweets />
      <Cakes />
      <Franchise />
      <Faqs/>
      <Blog />
      <Footer />

    </>
  );
};

export default Home;
