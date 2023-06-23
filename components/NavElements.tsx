import { HStack, Text, Box, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Contact from "./Contact";
import NextLink from "next/link";

const NavElements = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection={props.orientation}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ base: "3rem", lg: "3rem" }}
      ml="0rem !important"
    >
      {[
        ["HOME", "/"],
        ["GALLERY", "/gallery"],
        ["SERVICES", "/services"],
        ["COMPANY", "/company"],
        ["TEAM", "/team"],
        ["CAREER", "/career"],
      ].map((item, index) => (
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
      ))}

      <>
        <Button
          border={"1px solid black"}
          _hover={{
            color: "black",
            bg: "white",
            border: "1px solid black",
          }}
          fontFamily={"poppins"}
          borderRadius={"0rem"}
          fontSize={"1rem"}
          onClick={onOpen}
          fontWeight={300}
          color="white"
          bg="black"
          pt=".1rem"
        >
          CONTACT US
        </Button>
        <Contact isOpen={isOpen} onClose={onClose} />
      </>
    </Box>
  );
};

export default NavElements;
