import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetail from "./pages/ProductDetail";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => redirect("/home"),
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "headphones",
        Component: Headphones,
      },
      {
        path: "speakers",
        Component: Speakers,
      },
      {
        path: "earphones",
        Component: Earphones,
      },
      {
        path: "product/:slug",
        Component: ProductDetail,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
