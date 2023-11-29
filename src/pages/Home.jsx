import React from "react";
import EnjoyNewCoffe from "../components/EnjoyNewCoffe";
import OrmadoKaffeSwiper from "../components/OrmadoKaffeSwiper";
import ProductCards from "../components/ProductCards";
import Payments from "../components/Payments";
import TestDetails from "../components/TestDetails";
import Franchise from "../components/Franchise";
import Blog from "../components/blog/Blog";
import Cakes from "../components/Cakes";
import WhyUs from "../components/home/WhyUs";
import BestOffer from "../components/home/BestOffer"
import NewSweets from "../components/home/NewSweets"
import Faqs from "../components/Faqs";


const Home = () => {
  return (
    <>
    
      <OrmadoKaffeSwiper />
      <EnjoyNewCoffe />
      <ProductCards/>
      <TestDetails />
      <Payments />
      <WhyUs />
      <BestOffer />
      <NewSweets />
      <Cakes />
      <Franchise />
      <Faqs/>
      <Blog />
     

   


    </>
  );
};

export default Home;
