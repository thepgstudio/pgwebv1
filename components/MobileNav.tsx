import { Squash as Hamburger } from "hamburger-react";
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

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hamburger toggle={onOpen} toggled={isOpen} duration={0.5} />

      <Drawer
        size={"full"}
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={"xl"} />

          <DrawerBody
            display={"flex"}
            alignItems={"center"}
            flexDir={"column"}
            justifyContent={"center"}
            height={"100%"}
          >
            <NavElements orientation={"column"}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
