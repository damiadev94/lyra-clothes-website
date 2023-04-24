import React, { useEffect, useState } from "react";
import { BsBag, BsPerson, BsMenuApp } from "react-icons/bs";
import NavLinks from "../components/NavLinks";
import BurgerMenu from "../components/BurgerMenu";

export default function () {
  
  const isMobile = () => {
    let isMobile;
    innerWidth > 768 ? isMobile = false : isMobile = true;
    return isMobile;
  }

  return (
    // NAV
    <div className="w-full bg-gray100 px-[20px] md:px-[160px]">
      <div className="flex items-center justify-between py-[16px]">
        {/* LOGO */}
        <a href="/">
          <div className="flex flex-col items-center gap-0 ">
            <span className="font-dreamAvenue text-[32px] uppercase leading-[30px] tracking-[4px] text-gray900">
              Lyra
            </span>
            <span className="font-dreamAvenue text-[8px] uppercase tracking-[4px] text-gray500">
              clothes
            </span>
          </div>
        </a>
        {/* LINKS */}
        {isMobile() ? null : <NavLinks />}
        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          <a href="">
            <BsPerson size={"32px"} color="#838383" />
          </a>
          <a href="">
            <BsBag size={"24px"} color="#838383" />
          </a>
          {isMobile() ? <BurgerMenu/> : null}
        </div>
      </div>
    </div>
  );
}
