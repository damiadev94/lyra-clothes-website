import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Product from "./pages/product"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/product",
      element: <Product/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
