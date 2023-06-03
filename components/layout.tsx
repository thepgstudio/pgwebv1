import localFont from "next/font/local";
import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const pgFont = localFont({
  src: "../public/assets/logos/futura/futur.ttf",
  display: "swap",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
