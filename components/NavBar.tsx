import { HStack, Box, Text, Button } from "@chakra-ui/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NextRouter, useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import logo_small from "../public/assets/logos/PGStudio Logo - Variant 1.png";
import logo_large from "../public/assets/logos/PGStudio Logo - Variant 2.png";
import NavElements from "./NavElements";
import MobileNav from "./MobileNav";
import Image from "next/image";


const scrollIntoElement = (elementId: string, router: NextRouter) => {
  if (router.pathname === "/") {
    const element = document.getElementById(elementId)!;
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  } else {
    router.push("/#services");
  }
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router: NextRouter = useRouter();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    restDelta: 0.001,
    damping: 50,
  });

  useEffect(() => {
    const scrollChange = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", scrollChange);
    return () => window.removeEventListener("scroll", scrollChange);
  }, []);

  return (
    <Box
      borderBottom={{ base: "1px solid gainsboro", lg: "none" }}
      flexDirection={"column"}
      position={"fixed"}
      h={"max-content"}
      display={"flex"}
      w={"100vw"}
      zIndex={999}
      bg={"white"}
      py={"1rem"}
      top={0}
    >
      <HStack
        alignItems={{ base: "flex-start", lg: "flex-start" }}
        px={{ base: "1rem", lg: "2rem" }}
        justifyContent={"space-between"}
        h={"max-content"}
        gap={"1rem"}
      >
        <Box
          display={{ base: "none", lg: "block" }}
          cursor={"pointer"}
          onClick={() => router.push("/")}
        >
          <AnimatePresence>
            <Box
              display={scrolled ? "block" : "none"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              as={motion.div}
              maxW={"20rem"}
            >
              <Image
                style={{ width: "20rem" }}
                src={logo_large}
                alt="logo image"
                priority
              />
            </Box>
          </AnimatePresence>

          <Box maxW={"20rem"} display={scrolled ? "none" : "block"}>
            <Image
              style={{ width: "9rem" }}
              alt={"logo image"}
              className={"logo"}
              src={logo_small}
              priority
            />
          </Box>
        </Box>

        {/* Mobile*/}
        <Box
          display={{ base: "block", lg: "none" }}
          onClick={() => router.push("/")}
          ml={"0rem !important"}
          w={"5rem"}
        >
          <Image
            src={logo_small}
            alt="logo"
            style={{
              width: "6rem",
              height: "max-content",
              maxHeight: "5rem",
            }}
          />
        </Box>

        <Box alignSelf={"center"} display={{ base: "block", lg: "none" }}>
          <MobileNav />
        </Box>

        <Box display={{ base: "none", lg: "flex" }}>
          <NavElements orientation="row" fontSize="1.1rem" />
        </Box>
      </HStack>

      <motion.div
        style={{
          scaleX,
        }}
        className="progress-bar"
      />
    </Box>
  );
};

export default NavBar;
