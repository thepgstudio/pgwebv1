import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";
import ScrollToTopButton from "./TopScroller";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main>
        {children}
        <Analytics />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
