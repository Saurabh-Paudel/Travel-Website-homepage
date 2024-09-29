import React from "react";
import HomeBanner from "./components/HomeBanner";
import Category from "./components/Category";
import TopSelling from "./components/TopSelling";
import "./index.css";
import EasyStep from "./components/EasyStep";

export default function App() {
  return (
    <>
      <HomeBanner />
      <Category />
      <TopSelling />
      <EasyStep />
    </>
  );
}
