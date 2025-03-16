import React from "react";
import HomeBanner from "../../HomePageComponent/Banner";
import BrowseRange from "../../HomePageComponent/BrowseRange";
import OurProducts from "../../HomePageComponent/OurProducts";
import BannerTwo from "../../HomePageComponent/BannerTwo";
function Homepage() {
  return (
    <>
      <HomeBanner />
      <BrowseRange />
      <OurProducts />
      <BannerTwo />
    </>
  );
}

export default Homepage;
