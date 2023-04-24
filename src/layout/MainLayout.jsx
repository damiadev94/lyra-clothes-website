import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopOfferAdds from "./TopOfferAdds";

export default function MainLayout({ children }) {
  return (
    <div>
      <div className="w-full">
        <TopOfferAdds text="Hasta 70% OFF comprando dentro de las proximas 24hs." />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
