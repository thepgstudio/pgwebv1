import { HStack, Box, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import logo_small from "../public/assets/logos/PGStudio Logo - Variant 1.png";
import logo_large from "../public/assets/logos/PGStudio Logo - Variant 2.png";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollChange = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", scrollChange);
    return () => window.removeEventListener("scroll", scrollChange);
  }, []);

  return (
    <Box
      position={"fixed"}
      h="max-content"
      w={"100vw"}
      top={0}
      px="3rem"
      py="1rem"
      bg="white"
    >
      <HStack h={"max-content"} justifyContent={"space-between"} alignItems={"flex-start"}>
        <Box maxW={scrolled ? "13rem" : "8rem"}>
          {scrolled ? (
            <Box width="20rem">
              <Image src={logo_large} alt="logo image" />
            </Box>
          ) : (
            <Box width="9rem">
              <Image src={logo_small} className="logo" alt="logo image" />
            </Box>
          )}
        </Box>

        <HStack gap="3rem">
          {[
            ["HOME", "/"],
            ["GALLERY", "/gallery"],
            ["SERVICES", "/services"],
            ["COMPANY", "/company"],
            ["TEAM", "/team"],
            ["CAREER", "/career"],
          ].map((item, index) => (
            <Text
              fontFamily={"poppins  "}
              fontWeight={600}
              fontSize={"1.1rem"}
              key={index}
              _hover={{ color: "#bababa" }}
              cursor={"pointer"}
              color={router.pathname === item[1] ? "#bababa" : "black"}
            >
              {item[0]}
            </Text>
          ))}

          <Button
            borderRadius={"0rem"}
            bg="black"
            color="white"
            fontWeight={300}
            fontSize={".8rem"}
            fontFamily={"poppins"}
            border={"1px solid black"}
            pt=".1rem"
            _hover={{ color: "black", bg: "white", border: "1px solid black" }}
          >
            CONTACT US
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
