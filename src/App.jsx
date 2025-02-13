import React from "react";
import HomeBanner from "./components/HomeBanner";
import Category from "./components/Category";
import TopSelling from "./components/TopSelling";
import EasyStep from "./components/EasyStep";
import Testimonials from "./components/Testimonial";
import Company from "./components/Company";
import Subscribe from "./components/Subscribe";
import "./index.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <HomeBanner />
      <Category />
      <TopSelling />
      <EasyStep />
      <Testimonials />
      <Company />
      <Subscribe />
      <Footer />
    </>
  );
}
