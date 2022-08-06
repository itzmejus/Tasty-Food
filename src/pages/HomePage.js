import React from "react";

import FoodItemList from "../components/FoodItemList";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import PopularFoods from "../components/PopularFoods";
import SpecialDishes from "../components/SpecialDishes";
import WhatWeServe from "../components/WhatWeServe";
import WhyTastyTreat from "../components/WhyTastyTreat";
function HomePage() {
  return (
    <div>
      <div>
        <HomeSection />
        <WhatWeServe />
        <PopularFoods />
        <WhyTastyTreat />
        <Footer />
        {/* <SpecialDishes /> */}
        {/* <FoodItemList  /> */}
      </div>
    </div>
  );
}

export default HomePage;
