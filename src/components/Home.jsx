import React from "react";
import EnjoyNewCoffe from "./EnjoyNewCoffe";
import OrmadoKaffeSwiper from "./OrmadoKaffeSwiper";
import Payments from "./Payments";
import Navbar from "../components/Navbar";
import TestDetails from "./TestDetails";
import Franchise from "./Franchise";
import Blog from "./Blog/Blog";



// import Cakes from "./Cakes";

const Home = () => {
  return (
    <>
      <Navbar />
      <OrmadoKaffeSwiper />
      <EnjoyNewCoffe />
      <Payments />
      <TestDetails />
      {/* <Cakes /> */}
      <Franchise />
      <Blog />
    </>
  );
};

export default Home;
