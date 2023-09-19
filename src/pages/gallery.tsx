import {
  Box,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Button,
  Center,
  Link,
} from "@chakra-ui/react";

const gallery = () => {
  return (
    <Box
      fontFamily={"poppins"}
      mt={{ base: "10rem", lg: "17rem" }}
      mb={{ base: "5rem", lg: "10rem" }}
      pr={{ base: "1rem", lg: "2rem" }}
      pl={{ base: "1rem", lg: "3rem" }}
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
              Gallery
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <Box
        mt="3rem"
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Text textAlign={"center"} fontWeight={700} fontSize={"2.5rem"}>
          Galery Section under construction, please click the Button below to view some
          of our portfolio projects.
        </Text>
        <Button
          as={Link}
          isExternal
          href={"https://thepg.studio/works"}
          fontSize={"1.5rem"}
          p={"1rem"}
          _hover={{}}
          width={"max-content"}
          mt="1rem"
          bg="black"
          color={"white"}
        >
          View Projects
        </Button>
      </Box>
    </Box>
  );
};

export default gallery;
