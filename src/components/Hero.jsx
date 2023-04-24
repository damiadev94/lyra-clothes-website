import React from "react";
import { BiShoppingBag } from "react-icons/bi";

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex min-h-[680px] w-full items-center justify-center"
    >
      {/* IMGS */}
      <div className="absolute left-0 top-0 grid h-full w-full grid-cols-2">
        <div className="col-span-1 bg-[url('/images/hero-img-1.jpg')] bg-cover bg-center"></div>
        <div className="col-span-1 bg-[url('/images/hero-img-2.jpg')] bg-cover bg-center"></div>
      </div>
      {/* CONTENT */}
      <div className=" flex flex-col items-center gap-[16px]">
        {/* TEXT */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-center font-poppins text-[48px] font-black uppercase tracking-[16px] drop-shadow-[0px_4px_5px_rgba(37,37,37,0.3)]">
              <span className="pl-8 text-center tracking-[50%] leading-3 text-gray900">
                sea<span className="leading-3 text-gray100">son</span>
              </span>
            </p>
            <p className="text-center font-poppins text-[48px] font-black uppercase tracking-[16px] drop-shadow-[0px_4px_5px_rgba(37,37,37,0.3)]">
              <span className="pl-4 leading-3 text-gray900">
                20
                <span className="leading-3 text-gray100">23</span>
              </span>
            </p>
          </div>
        </div>
        {/* BUTTON */}
        <a href="#">
          <div className="flex items-center justify-center bg-gray900 px-[30px] py-[15px] drop-shadow-[0px_4px_5px_rgba(37,37,37,0.3)]">
              <p className="flex items-center justify-center text-center font-poppins text-base font-bold uppercase leading-4 text-gray100">
                <BiShoppingBag
                  className="mr-2"
                  size={"16px"}
                  color={"#f7f7f7"}
                />
                comprar ahora
              </p>
          </div>
        </a>
      </div>
    </div>
  );
}
