import React from "react";
import Carousel from "../components/Carousel";
import Slider from "../components/Slider";
import Cardslider from "../components/Cardslider";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout type="noSidebar">
      <>
        <Slider />
        <Carousel />
        <Cardslider />
      </>
    </Layout>
  );
};

export default Home;
