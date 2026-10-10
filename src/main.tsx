import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
