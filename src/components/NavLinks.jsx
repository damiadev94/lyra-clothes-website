import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

function NavLinks() {
  return (
    <div className="flex text-gray500">
          <div className="mx-4 flex items-center gap-2">
            <a
              href="#"
              className="font-poppins text-[16px] font-light uppercase leading-6"
            >
              categorias
            </a>
            <TiArrowSortedDown
              size={"16px"}
              color="#838383"
              cursor={"pointer"}
            />
          </div>
          <a
            href="#"
            className="mx-4 font-poppins text-[16px] font-light uppercase leading-6"
          >
            tendencia
          </a>
          <a
            href="#"
            className="mx-4 font-poppins text-[16px] font-light uppercase leading-6"
          >
            locales
          </a>
        </div>
  )
}

export default NavLinks
