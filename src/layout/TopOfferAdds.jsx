import React from "react";

export default function TopOfferAdds({ text }) {
  return (
    <div className="flex w-full items-center justify-center bg-gray900 py-3">
      <span className="font-poppins text-base leading-6 text-gray100">{text}</span>
    </div>
  );
}
