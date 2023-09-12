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
import { useRouter } from "next/router";
import Image from "next/image";
import {asset} from "@/util";

const Team = () => {
  const router = useRouter();

  return (
    <Box
      fontFamily={"poppins"}
      mt={{ base: "10rem", lg: "17rem" }}
      mb={{ base: "5rem", lg: "10rem" }}
      px={{ base: "1rem", lg: "2rem" }}
    >
      <HStack px={{ base: "0rem", lg: "1rem" }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              fontWeight={300}
              href="/"
            >
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
        flexDir={{ base: "column", lg: "row" }}
        px={{ base: "0rem", lg: "1rem" }}
        alignItems={"flex-start"}
        display={"flex"}
        justifyContent={"space-between"}
        gap="2rem"
        mt="3rem"
      >
        <Text
          w={{ base: "100%", lg: "50%" }}
          fontSize={{ base: "1.6rem", lg: "1.75rem" }}
          fontWeight={400}
        >
          PGSTUDIO TEAM - A TEAM UNITED IN ARTISTIC VISION, TRANSCENDING
          BOUNDARIES TOGETHER
        </Text>

        <Text
          ml={"0rem !important"}
          w={{ base: "100%", lg: "55%" }}
          fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          fontWeight={200}
          textTransform={"uppercase"}
        >
          With our exceptional talent magnetism, we&apos;re able to recruit a
          selection of outstanding talents and brightest minds within the
          industry.
        </Text>
      </HStack>

      <HStack
        mt="7rem"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={"5rem"}
      >
        {asset.map((item, index) => (
          <VStack
            cursor={"pointer"}
            ml="0rem !important"
            minW={"20rem"}
            w={{ base: "100%", lg: "24%" }}
            key={index}
          >
            <Box>
              <Image
                style={{ height: "100%" }}
                src={item[0]}
                alt="placholder image"
                placeholder="blur"
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
        ))}
      </HStack>
    </Box>
  );
};

export default Team;
