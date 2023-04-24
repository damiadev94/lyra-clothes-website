import React from "react";
import Size from "./Size";

function Product({ images, description }) {
  return (
    <div className="poppins mx-[320px] my-[80px] grid grid-cols-1 gap-[32px] lg:grid-cols-10">
      {/* IMAGES */}
      <div className="col-span-1 flex justify-center lg:col-span-6">
        <div className="mr-8 flex flex-col">
          {images.map((image) => {
            return (
              <img
                className="mb-8 w-[64px] cursor-pointer"
                src={image}
                alt="img"
              />
            );
          })}
        </div>
        <div className="h-[680px] w-[680px] overflow-hidden">
          <img className="h-auto w-full" src={images[0]} alt="img" />
        </div>
      </div>
      {/* DESCRIPCION */}
      <div className="col-span-1 flex flex-col lg:col-span-4">
        <div>
          <span className="font-regular text-[16px] text-gray600">
            51 Vendidos
          </span>
          <h1 className="max-w-lg text-[32px] font-bold text-gray700">
            Remera Negra T-black 705 s Todos Los Talles
          </h1>
        </div>
        <div>
          <Size sizes={["S","M","L","XL"]}/>
        </div>
      </div>
    </div>
  );
}

export default Product;
