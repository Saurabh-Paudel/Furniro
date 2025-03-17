import React from "react";
import HomeBanner from "../../HomePageComponent/Banner";
import BrowseRange from "../../HomePageComponent/BrowseRange";
import OurProducts from "../../HomePageComponent/OurProducts";
import BannerTwo from "../../HomePageComponent/BannerTwo";
import BannerThree from "../../HomePageComponent/BannerThree";
function Homepage() {
  return (
    <>
      <HomeBanner />
      <BrowseRange />
      <OurProducts />
      <BannerTwo />
      <BannerThree />
    </>
  );
}

export default Homepage;
