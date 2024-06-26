import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";
import ScrollToTopButton from "./TopScroller";

import MetaTags from "./MetaTags";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScheduleButton from "./ScheduleCall";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MetaTags />
      <NavBar />
      <main>
        {children}
        <Analytics />
        <SpeedInsights />
        <ScheduleButton />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
