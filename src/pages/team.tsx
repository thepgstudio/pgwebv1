import {
  Box,
  HStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { asset } from "@/util";
import Image from "next/image";

const Team = () => {
  return (
    <Box
      fontFamily={"poppins"}
      mt={{ base: "10rem", lg: "17rem" }}
      mb={{ base: "3rem", lg: "7rem" }}
      px={{ base: "1rem", lg: "2rem" }}
    >
      <HStack>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              fontSize={{ base: "1rem", lg: "1.35rem" }}
              fontWeight={300}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              fontSize={{ base: "1rem", lg: "1.35rem" }}
              color={"#BABABA"}
              fontWeight={200}
              href="#"
            >
              Team
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <HStack
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        display={"flex"}
        gap={"2rem"}
        mt={"2rem"}
      >
        <Text
          fontSize={{ base: "1.3rem", lg: "1.75rem" }}
          w={{ base: "100%", lg: "50%" }}
          fontWeight={400}
        >
          PGSTUDIO TEAM - A TEAM UNITED IN ARTISTIC VISION, TRANSCENDING
          BOUNDARIES TOGETHER
        </Text>

        <Text
          fontSize={{ base: "1.2rem", lg: "1.75rem" }}
          w={{ base: "100%", lg: "55%" }}
          textTransform={"uppercase"}
          ml={"0rem !important"}
          fontWeight={200}
        >
          With our exceptional talent magnetism, we&apos;re able to recruit a
          selection of outstanding talents and brightest minds within the
          industry.
        </Text>
      </HStack>

      <HStack
        mt={{ base: "3rem", lg: "7rem" }}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
        rowGap={"5rem"}
      >
        {asset.map((item, index) => (
          <AnimatePresence key={index}>
            <VStack
              transition={"all ease-in-ease-out"}
              w={{ base: "100%", lg: "24%" }}
              initial={{ scale: 1.01 }}
              ml={"0rem !important"}
              animate={{ scale: 1 }}
              transitionDelay={".1s"}
              exit={{ scale: 0.75 }}
              cursor={"pointer"}
              as={motion.a}
              href={`${item[4]}`}
              target="_blank"
              display={"flex"}
              minW={"20rem"}
            >
              <Box>
                <Image
                  style={{ height: "100%" }}
                  alt={"placholder image"}
                  placeholder={"blur"}
                  src={item[0]}
                />
              </Box>
              <Box pt="1.5rem">
                <Text fontSize={"1rem"} fontWeight={500}>
                  {`${item[1]}`} <br />{" "}
                  <chakra.span color={"gray"}>{`${item[2]}`}</chakra.span>
                </Text>
                <Text pt=".5rem" fontSize={".8rem"} fontWeight={300}>
                  {`${item[3]}`}
                </Text>
              </Box>
            </VStack>
          </AnimatePresence>
        ))}
      </HStack>
    </Box>
  );
};

export default Team;
