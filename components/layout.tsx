import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";
import ScrollToTopButton from "./TopScroller";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
