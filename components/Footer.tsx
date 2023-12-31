import { Box, Text, VStack } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";

const Footer = () => {
  const router: NextRouter = useRouter();

  const nav: String[][] = [
    ["HOME", "/"],
    ["GALLERY", "/gallery"],
    ["COMPANY", "/company"],
    ["SERVICES", "#"],
    ["TEAM", "/team"],
  ];

  const nav_: String[][] = [
    ["Residential renderings", "/"],
    ["Commercial architectural 3d visualization", "/"],
    ["Exterior 3d visualization", "/"],
    // ["Site plan rendering", "/"],
    // ["Aerial view rendering services", "/"],
    ["Interior 3d visualizations", "/"],
    ["Real estate rendering", "/"],
    ["Virtual Staging", "/"],
    ["3d Product visualization", "/"],
    ["Furniture rendering", "/"],
    // ["VFX AND POST-PRODUCTION SERVICES", "/"],
  ];

  return (
    <Box
      px={{ base: "1rem", lg: "2.5rem" }}
      borderTop={"1px solid #f0f0f0"}
      fontFamily={"poppins"}
      flexDir={"column"}
      display={"flex"}
      w={"100vw"}
      bottom={0}
      gap="5rem"
      pt="4rem"
      pb="1rem"
    >
      <Box
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        display={"flex"}
        gap={"2rem"}
      >
        <VStack alignItems={"flex-start"}>
          {nav.map((item, index) => (
            <Text
              color={router.pathname === item[1] ? "#bababa" : "black"}
              onClick={() => router.push(`${item[1]}`)}
              _hover={{ color: "#bababa" }}
              fontFamily={"poppins"}
              cursor={"pointer"}
              fontSize={".9rem"}
              fontWeight={600}
              key={index}
            >
              {item[0]}
            </Text>
          ))}
        </VStack>

        <VStack alignItems={"flex-start"}>
          <Text
            fontFamily={"poppins"}
            fontSize={"1rem"}
            fontWeight={600}
            mb=".5rem"
          >
            SERVICES:
          </Text>
          <Text fontWeight={600} textTransform={"uppercase"}>
            Architectural visualization
          </Text>
          <VStack alignItems={"flex-start"} gap={0}>
            {nav_.map((item, index) => (
              <Text
                _hover={{ color: "#bababa" }}
                textTransform={"uppercase"}
                mt={"0rem !important"}
                fontFamily={"poppins"}
                fontSize={".8rem"}
                fontWeight={300}
                key={index}
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
          {/* <VStack alignItems={"flex-start"}>
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
          </VStack> */}

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
                _hover={{ color: "#bababa" }}
                textTransform={"uppercase"}
                mt={"0rem !important"}
                fontFamily={"poppins"}
                cursor={"pointer"}
                fontSize={".8rem"}
                fontWeight={300}
                key={index}
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
