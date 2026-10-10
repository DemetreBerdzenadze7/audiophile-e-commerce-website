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
import Checkout from "./pages/Checkout";
import RootLayout from "./layout/RootLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

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
      {
        path: "checkout",
        Component: Checkout,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
