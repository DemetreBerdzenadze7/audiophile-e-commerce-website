import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
