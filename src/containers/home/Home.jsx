import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

import HeroMovie from "../../components/heroMovie/HeroMovie";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <HeroMovie />
    </div>
  );
};

export default Home;
