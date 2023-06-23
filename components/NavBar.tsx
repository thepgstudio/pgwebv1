import { HStack, Box, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import logo_small from "../public/assets/logos/PGStudio Logo - Variant 1.png";
import logo_large from "../public/assets/logos/PGStudio Logo - Variant 2.png";
import Image from "next/image";
import MobileNav from "./MobileNav";
import NavElements from "./NavElements";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router: NextRouter = useRouter();

  useEffect(() => {
    const scrollChange = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", scrollChange);
    return () => window.removeEventListener("scroll", scrollChange);
  }, []);

  return (
    <Box
      borderBottom={{ base: "1px solid gainsboro", lg: "none" }}
      px={{ base: "1rem", lg: "3rem" }}
      position={"fixed"}
      h={"max-content"}
      zIndex={999}
      w={"100vw"}
      top={0}
      py="1rem"
      bg="white"
    >
      <HStack
        alignItems={{ base: "flex-start", lg: "flex-start" }}
        justifyContent={"space-between"}
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
          w={"6rem"}
        >
          <Image
            src={logo_small}
            alt="logo"
            style={{ width: "6rem", height: "max-content", maxHeight: "5rem" }}
          />
        </Box>

        <Box alignSelf={"center"} display={{ base: "block", lg: "none" }}>
          <MobileNav />
        </Box>

        <Box display={{ base: "none", lg: "flex" }}>
          <NavElements orientation="row" fontSize="1.1rem" />
        </Box>
      </HStack>
    </Box>
  );
};

export default NavBar;
