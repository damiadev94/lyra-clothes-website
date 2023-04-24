import React from "react";
import CardProduct from "./CardProduct";

const cards = [
  { image: "/images/trend-img-1.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-2.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-3.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-4.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-5.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-6.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-7.jpg", title: "Outfit", price: "$299" },
  { image: "/images/trend-img-8.jpg", title: "Outfit", price: "$299" },
];

export default function Trend() {
  return (
    <div className="my-[80px] w-full">
      <h1 className="mx-[160px] mb-[40px] text-[32px] font-bold">
        TREND THIS WEEK
      </h1>
      <div
        id="card-container"
        className="mx-[160px] flex flex-wrap justify-between gap-[64px]"
      >
        {cards.map(card => {
          return <CardProduct image={card.image} title={card.title} price={card.price}/>
        })}
      </div>
    </div>
  );
}
