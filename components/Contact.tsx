import {
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Modal,
  Box,
  Button,
  Text,
  HStack,
  Input,
  VStack,
  Textarea,
} from "@chakra-ui/react";

const Contact = (props: any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent maxW={{base:"90%", lg:"35%"}} borderRadius={"none"}>
        <ModalCloseButton size={"lg"} />

        <ModalBody fontFamily={"poppins"} p="3rem">
          <Box mb="2rem">
            <Text fontWeight={300} fontSize={"1rem"}>
              DO YOU HAVE ANY QUESTIONS? <br /> CONTACT US VIA EMAIL
            </Text>
            <Text
              fontWeight={600}
              textTransform={"uppercase"}
              fontSize={"1.15rem"}
            >
              office@thepgstudio.com
            </Text>
            <Text fontWeight={300} fontSize={"1rem"}>
              OR COMPLETE THE FORM BELOW
            </Text>
          </Box>
          <form action="">
            <VStack gap="2rem">
              <Box w="100%" borderBottom={"1px solid black"}>
                <Input
                  _placeholder={{ color: "#000000" }}
                  focusBorderColor="transparent"
                  borderRadius={"0rem"}
                  placeholder="NAME"
                  m={"0rem"}
                  p={"0rem"}
                  w="100%"
                  border="none"
                  type="text"
                  autoFocus
                />
              </Box>

              <Box w="100%" borderBottom={"1px solid black"}>
                <Input
                  _placeholder={{ color: "#000000" }}
                  focusBorderColor="transparent"
                  borderRadius={"0rem"}
                  placeholder="EMAIL"
                  m={"0rem"}
                  p={"0rem"}
                  w="100%"
                  border="none"
                  type="text"
                />
              </Box>

              <Box w="100%" borderBottom={"1px solid black"}>
                <Textarea
                  _placeholder={{ color: "#000000" }}
                  focusBorderColor="transparent"
                  borderRadius={"0rem"}
                  placeholder="MESSAGE"
                  border="none"
                  m={"0rem"}
                  p={"0rem"}
                  w="100%"
                />
              </Box>

              <Button
                _hover={{ color: "black", bg: "white", border: "1px solid" }}
                borderRadius={"0rem"}
                background={"black"}
                fontSize={"1.3rem"}
                fontWeight={"300"}
                h="3.2rem"
                color={"white"}
                type="submit"
                w="100%"
              >
                SEND
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Contact;
