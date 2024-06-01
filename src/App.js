import React from "react";
import "./App.css";
import Hero from "./Component/Hero";
import Programs from "./Component/Programs/Programs";
import Reasons from "./Component/Reasons/Reasons";
import Plan from "./Component/Plan/Plan";
import Trestrimonial from "./Component/Trestrimonial/Trestrimonial";
import Join from "./Component/Join/Join";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plan></Plan>
      <Trestrimonial></Trestrimonial>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
};

export default App;
