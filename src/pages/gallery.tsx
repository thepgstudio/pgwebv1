import {
  Box,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Text,
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
            <BreadcrumbLink fontSize={"1.35rem"} fontWeight={300} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize={"1.35rem"} color={"#BABABA"} fontWeight={200} href="#">
              Gallery
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <Box
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        display={"flex"}
        width={"100%"}
        mt={"3rem"}
      >
        <Text textAlign={"center"} fontWeight={700} fontSize={"2.5rem"}>
          Gallery Section under construction, please click the Button below to
          view some of our portfolio projects.
        </Text>
        <Button
          href={"https://thepg.studio/works"}
          width={"max-content"}
          fontSize={"1.5rem"}
          color={"white"}
          bg={"black"}
          mt={"1rem"}
          _hover={{}}
          p={"1rem"}
          as={Link}
          isExternal
        >
          View Projects
        </Button>
      </Box>
    </Box>
  );
};

export default gallery;
