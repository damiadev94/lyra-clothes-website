import React from "react";
import MainLayout from "../layout/MainLayout";
import ProductInfo from "../components/ProductInfo";

const images = [
  "/images/trend-img-1.jpg",
  "/images/trend-img-1.jpg",
  "/images/trend-img-1.jpg",
  "/images/trend-img-1.jpg",
  "/images/trend-img-1.jpg",
];

function Product() {
  return (
    <>
      <MainLayout>
        <ProductInfo images={images}/>
      </MainLayout>
    </>
  );
}

export default Product;
