import { Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react";
import { Sling as Hamburger } from "hamburger-react";
import { useDisclosure } from "@chakra-ui/react";
import NavElements from "./NavElements";


const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hamburger
        size={35}
        toggle={onOpen}
        toggled={isOpen}
        duration={0.5}
        rounded
      />

      <Drawer
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
        size={"full"}
      >
        <DrawerContent mt="6rem" overflowY={"scroll"}>
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
