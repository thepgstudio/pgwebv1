import { HStack, Box, Text, Button } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const scrollChange = () => setScrolled(window.scrollY > 150);
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
      py="1rem"
      bg="white"
      top={0}
    >
      <HStack
        px={{ base: "1rem", lg: "3rem" }}
        alignItems={{ base: "flex-start", lg: "flex-start" }}
        justifyContent={"space-between"}
        gap={"1rem"}
        h={"max-content"}
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Box maxW={"20rem"} display={scrolled ? "block" : "none"}>
            <Image
              style={{ width: "20rem" }}
              src={logo_large}
              alt="logo image"
              priority
            />
          </Box>

          <Box maxW={"20rem"} display={scrolled ? "none" : "block"}>
            <Image
              style={{ width: "9rem" }}
              src={logo_small}
              className="logo"
              alt="logo image"
              priority
            />
          </Box>
        </Box>

        {/* Mobile*/}
        <Box
          onClick={() => router.push("/")}
          ml="0rem !important"
          display={{ base: "block", lg: "none" }}
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
