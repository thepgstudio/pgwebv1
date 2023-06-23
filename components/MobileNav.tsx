import { Sling as Hamburger } from "hamburger-react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NavElements from "./NavElements";
import { useState } from "react";
import { NextRouter, useRouter } from "next/router";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router:NextRouter = useRouter();

  return (
    <>
      <Hamburger
        size={40}
        rounded
        toggle={onOpen}
        toggled={isOpen}
        duration={0.5}
      />

      <Drawer
        size={"full"}
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent mt="7rem">
          {/* <DrawerCloseButton size={"5xl"} mr="1rem" mt="1rem"/> */}

          <DrawerBody
            justifyContent={"flex-start"}
            alignItems={"center"}
            flexDir={"column"}
            display={"flex"}
            height={"100%"}
            mt="4rem"
          >
            <NavElements
              onClick={onClose}
              orientation={"column"}
              fontSize="1.5rem"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
