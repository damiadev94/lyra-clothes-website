import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import Hero from "../components/Hero";
import Trend from "../components/Trend";
import Arrivals from "../components/Arrivals";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    // HERO
    <>
      <MainLayout>
        <Hero />
        {/* // TREND */}
        <Trend />
        {/* // ARRIVALS */}
        <Arrivals />
      </MainLayout>
    </>
  );
}
