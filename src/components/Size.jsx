import React from "react";

function Size({ sizes }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-paragraph text-gray600">Talles:</h1>
      <div className="flex">
        {sizes.map((size) => {
          return (
            <div className="relative flex flex-col items-center mr-4">
                <span className="absolute top-0 text-paragraph text-gray900">{size}</span>
              <input className="w-[24px] h-[24px] border-none bg-gray400" type="radio" name="sizes" value={size} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Size;
