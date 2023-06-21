import { HStack, Text, Box, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Contact from "./Contact";

const NavElements = (props: any) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Text
          color={router.pathname === item[1] ? "#bababa" : "black"}
          _hover={{ color: "#bababa" }}
          fontFamily={"poppins"}
          fontSize={"1.1rem"}
          cursor={"pointer"}
          fontWeight={600}
          key={index}
        >
          {item[0]}
        </Text>
      ))}

      <>
        <Button
          _hover={{
            color: "black",
            bg: "white",
            border: "1px solid black",
          }}
          border={"1px solid black"}
          fontFamily={"poppins"}
          borderRadius={"0rem"}
          fontSize={".8rem"}
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
