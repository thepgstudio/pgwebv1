import { Box, Text, VStack } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";

const Footer = () => {
  const router: NextRouter = useRouter();

  const nav: String[][] = [
    ["HOME", "/"],
    ["GALLERY", "/gallery"],
    ["SERVICES", "/services"],
    ["COMPANY", "/company"],
    ["TEAM", "/team"],
  ];

  const nav_: String[][] = [
    ["Exterior 3d renderings", "/"],
    ["Site plan rendering", "/"],
    ["Commercial architectural 3d visualization", "/"],
    ["Residential renderings", "/"],
    ["Aerial view rendering services", "/"],
    ["Interior 3d visualizations", "/"],
    ["Real estate rendering", "/"],
    ["Virtual Staging", "/"],
    ["3d Product visualization", "/"],
    ["Furniture rendering", "/"],
    ["VFX AND POST-PRODUCTION SERVICES", "/"],
  ];

  return (
    <Box
      px={{ base: "1rem", lg: "4rem" }}
      pt="4rem"
      pb="1rem"
      w={"100vw"}
      borderTop={"1px solid #f0f0f0"}
      bottom={0}
      display={"flex"}
      flexDir={"column"}
      fontFamily={"poppins"}
      gap="5rem"
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap="2rem"
        flexWrap={"wrap"}
      >
        <VStack alignItems={"flex-start"}>
          {nav.map((item, index) => (
            <Text
              fontFamily={"poppins"}
              fontWeight={600}
              fontSize={".9rem"}
              key={index}
              _hover={{ color: "#bababa" }}
              cursor={"pointer"}
              color={router.pathname === item[1] ? "#bababa" : "black"}
            >
              {item[0]}
            </Text>
          ))}
        </VStack>

        <VStack alignItems={"flex-start"}>
          <Text
            fontSize={"1rem"}
            mb=".5rem"
            fontFamily={"poppins"}
            fontWeight={600}
          >
            SERVICES:
          </Text>
          <Text fontWeight={600} textTransform={"uppercase"}>
            Architectural visualization
          </Text>
          <VStack alignItems={"flex-start"} gap={0}>
            {nav_.map((item, index) => (
              <Text
                mt={"0rem !important"}
                fontFamily={"poppins"}
                fontWeight={300}
                textTransform={"uppercase"}
                fontSize={".8rem"}
                key={index}
                _hover={{ color: "#bababa" }}
                cursor={"pointer"}
              >
                {item[0]}
              </Text>
            ))}
          </VStack>
        </VStack>

        <VStack alignItems={"flex-start"} gap="2rem">
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"1rem"} fontFamily={"poppins"} fontWeight={600}>
              ANIMATION
            </Text>
            <Text
              mt={"0rem !important"}
              fontFamily={"poppins"}
              textTransform={"uppercase"}
              fontSize={".8rem"}
              _hover={{ color: "#bababa" }}
              fontWeight={300}
              cursor={"pointer"}
            >
              ARCHITECTURAL ANIMATION
            </Text>
          </VStack>

          <VStack alignItems={"flex-start"}>
            <Text fontSize={"1rem"} fontFamily={"poppins"} fontWeight={600}>
              PANO
            </Text>
            {["360 Walkthrough", "360 Virtual Tours"].map((item, index) => (
              <Text
                key={index}
                mt={"0rem !important"}
                fontFamily={"poppins"}
                textTransform={"uppercase"}
                fontSize={".8rem"}
                _hover={{ color: "#bababa" }}
                fontWeight={300}
                cursor={"pointer"}
              >
                {item}
              </Text>
            ))}
          </VStack>
        </VStack>

        <VStack alignItems={"flex-start"} gap="2rem">
          <VStack alignItems={"flex-start"}>
            <Text
              textTransform={"uppercase"}
              fontSize={"1rem"}
              fontFamily={"poppins"}
              fontWeight={600}
            >
              2D/3D Plans
            </Text>
            <Text
              mt={"0rem !important"}
              fontFamily={"poppins"}
              textTransform={"uppercase"}
              fontSize={".8rem"}
              _hover={{ color: "#bababa" }}
              fontWeight={300}
              cursor={"pointer"}
            >
              Floor Plan
            </Text>
          </VStack>

          <VStack alignItems={"flex-start"}>
            <Text fontSize={"1rem"} fontFamily={"poppins"} fontWeight={600}>
              3D Modeling
            </Text>
            {[
              "Architerctural 3d modeling",
              "Product modeling",
              "Furniture modeling",
            ].map((item, index) => (
              <Text
                key={index}
                mt={"0rem !important"}
                fontFamily={"poppins"}
                textTransform={"uppercase"}
                fontSize={".8rem"}
                _hover={{ color: "#bababa" }}
                fontWeight={300}
                cursor={"pointer"}
              >
                {item}
              </Text>
            ))}
          </VStack>
        </VStack>
      </Box>
      <Box display={"flex"} flexDir={"column"}>
        <Text textTransform={"uppercase"} fontWeight={600} fontSize={"1rem"}>
          © copyright 2023 PGStudio all rights reserved.
        </Text>
        <Text
          fontSize={".9rem"}
          fontWeight={300}
          w="max-content"
          borderBottom={"1px solid #000"}
        >
          TERMS OF USE & PRIVACY POLICY
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
