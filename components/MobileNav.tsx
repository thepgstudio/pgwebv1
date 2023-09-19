import { Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import { Sling as Hamburger } from "hamburger-react";
import { useDisclosure } from "@chakra-ui/react";
import NavElements from "./NavElements";


const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router: NextRouter = useRouter();

  return (
    <>
      <Hamburger
        size={35}
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
        <DrawerContent height={""} mt="7rem" overflowY={"scroll"}>
          <DrawerBody
            justifyContent={"flex-start"}
            height={"max-content"}
            alignItems={"center"}
            flexDir={"column"}
            display={"flex"}
            my={"3rem"}
          >
            <NavElements
              orientation={"column"}
              onClick={onClose}
              fontSize="1.5rem"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
