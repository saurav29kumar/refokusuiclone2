import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Sripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Fotter from "./components/Fotter";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className="w-screen h-full bg-zinc-900 text-white ">
      <Navbar />
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Fotter/>
    </div>
  );
}
export default App;
