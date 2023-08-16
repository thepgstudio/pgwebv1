import { HStack, Text, Box, Button } from "@chakra-ui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Contact from "./Contact";
import NextLink from "next/link";

const scrollIntoElement = (elementId: string) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const NavElements = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Box
      gap={{ base: "3rem", lg: "3.5rem" }}
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
          <Text
            _hover={{ color: "#bababa" }}
            fontSize={props.fontSize}
            key={index}
            as={Link}
            smooth={true}
            fontFamily={"poppins"}
            cursor={"pointer"}
            fontWeight={600}
            to={item[1]}
            offset={-150}
            onClick={props.onClick}
          >
            {item[0]}
          </Text>
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
