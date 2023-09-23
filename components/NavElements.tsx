import { HStack, Text, Box, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Contact from "./Contact";
import NextLink from "next/link";

const NavElements = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box
      mt={{ base: "0rem", lg: ".5rem" }}
      gap={{ base: "3rem", lg: "4rem" }}
      flexDirection={props.orientation}
      display="flex"
      ml="0rem !important"
      alignItems={"center"}
      justifyContent={"center"}
    >
      {[
        ["HOME", "/"],
        ["GALLERY", "/gallery"],
        ["SERVICES", "services"],
        ["COMPANY", "/company"],
        ["TEAM", "/team"],
      ].map((item, index) =>
        item[0] === "SERVICES" ? (
          <Link key={index} href="/#services" scroll={false}>
            <Text
              onClick={props.onClick}
              fontFamily={"poppins"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={props.fontSize}
              _hover={{ color: "#bababa" }}
            >
              {item[0]}
            </Text>
          </Link>
        ) : (
          <NextLink href={`${item[1]}`} onClick={props.onClick} key={index}>
            <Text
              color={router.pathname === item[1] ? "#bababa" : "black"}
              _hover={{ color: "#bababa" }}
              fontSize={props.fontSize}
              fontFamily={"poppins"}
              cursor={"pointer"}
              fontWeight={600}
            >
              {item[0]}
            </Text>
          </NextLink>
        )
      )}

      <>
        <Button
          border={"1px solid black"}
          _hover={{
            border: "1px solid black",
            color: "black",
            bg: "white",
          }}
          fontFamily={"poppins"}
          borderRadius={"0rem"}
          fontSize={".9rem"}
          onClick={onOpen}
          fontWeight={300}
          color="white"
          bg="black"
          pt=".1rem"
          px={"2rem"}
        >
          CONTACT US
        </Button>
        <Contact isOpen={isOpen} onClose={onClose} />
      </>
    </Box>
  );
};

export default NavElements;
