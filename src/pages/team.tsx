import {
  Box,
  HStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import placeholder from "../../public/assets/team/test.jpeg";
import benjie from "../../public/assets/team/benjie.jpg"


const Team = () => {
  return (
    <Box
      fontFamily={"poppins"}
      mt={{ base: "10rem", lg: "17rem" }}
      mb={{ base: "5rem", lg: "10rem" }}
      px={{ base: "1rem", lg: "3rem" }}
    >
      <HStack>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontWeight={300} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color={"#BABABA"} fontWeight={200} href="#">
              Team
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <HStack
        display={"flex"}
        mt="3rem"
        gap="2rem"
        alignItems={"flex-start"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Text
          w={{ base: "100%", lg: "40%" }}
          fontSize={{ base: "1.6rem", lg: "1.75rem" }}
          fontWeight={500}
        >
          PGSTUDIO TEAM - A TEAM UNIFIED IN AESTHETIC SPIRIT
        </Text>

        <Text
          ml={"0rem !important"}
          w={{ base: "100%", lg: "60%" }}
          fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          fontWeight={200}
        >
          WITH THE ABILITY TO ATTRACT TEAM MEMBERS FROM ACROSS THE GLOBE, WE’RE
          ABLE TO FIND SOME OF THE INDUSTRY’S BEST AND BRIGHTEST.
        </Text>
      </HStack>

      <HStack
        mt="7rem"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={"5rem"}
      >
        {[1, 2, 3, 4].map((item, index) => (
          <VStack ml="0rem !important" minW={"20rem"} w={{ base: "100%", lg: "24%" }} key={index}>
            <Box>
              <Image
                style={{ height: "100%" }}
                src={benjie}
                alt="placholder image"
                placeholder="blur"
              />
            </Box>
            <Box pt="1.5rem">
              <Text fontSize={"1rem"} fontWeight={500}>
                AREO BENJAMEN OLUWATIMILEYIN
              </Text>
              <Text pt=".5rem" fontSize={".8rem"} fontWeight={300}>
                WE DON&apos;T KNOW EXACTLY HOW A PERSON CAN CONTROL SO MANY
                PROCESSES AT THE SAME TIME, BUT BEN DOES IT WITH EASE. STRONG
                TECHNICAL KNOWLEDGE COMBINED WITH LEADERSHIP SKILLS KEEPS TEAMS
                MOTIVATED AND ALIGNED IN ACHIEVING PROJECT SUCCESS.
              </Text>
            </Box>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default Team;
