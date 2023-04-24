import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[80px] bg-gray100 py-[80px]">
      <div className="grid min-w-[960px] grid-cols-5">
        {/* LOGO */}
        <div className="flex items-start">
          <div className="col-span-1 flex flex-col items-center gap-0">
            <span className="font-dreamAvenue text-[32px] uppercase leading-[30px] tracking-[4px] text-gray900">
              Lyra
            </span>
            <span className="font-dreamAvenue text-[8px] uppercase tracking-[4px] text-gray500">
              clothes
            </span>
          </div>
        </div>
        {/* LINKS */}
        <div className="col-span-3 grid grid-cols-3">
          <div className="col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="mb-2 text-base font-bold leading-3 text-gray700"
            >
              Categorias
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Ropa Hombre
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Ropa Mujer
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Conjunto Hombre
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Conjunto Mujer
            </a>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="mb-2 text-base font-bold leading-3 text-gray700"
            >
              Acerca
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Ropa Hombre
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Ropa Mujer
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Conjunto Hombre
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Conjunto Mujer
            </a>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <a
              href="#"
              className="mb-2 text-base font-bold leading-3 text-gray700"
            >
              Contacto
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Ropa Hombre
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Ropa Mujer
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Conjunto Hombre
            </a>
            <a href="#" className="text-[12px] font-medium text-gray600">
              Conjunto Mujer
            </a>
          </div>
        </div>
        {/* SOCIAL */}
        <div className="col-span-1 flex flex-col items-start justify-start gap-4">
          <a href="#">
            <BsFacebook color="#838383" />
          </a>
          <a href="#">
            <BsTwitter color="#838383" />
          </a>
          <a href="#">
            <BsInstagram color="#838383" />
          </a>
        </div>
      </div>
      <div className="">
        <span className="font-poppins text-base font-normal leading-6 text-gray500">
          LYRA clothes 2023
        </span>
      </div>
    </div>
  );
}
