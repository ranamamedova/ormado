import React from "react";
import EnjoyNewCoffe from "./EnjoyNewCoffe";
import OrmadoKaffeSwiper from "./OrmadoKaffeSwiper";
import ProductCards from "./ProductCards";
import Payments from "./Payments";
import TestDetails from "./TestDetails";
import Franchise from "./Franchise";
import Blog from "./Blog/Blog";



import Cakes from "./Cakes";
import WhyUs from "./home/WhyUs";
import BestOffer from "./home/BestOffer"
import NewSweets from "./home/NewSweets"
import Faqs from "./Faqs";
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
