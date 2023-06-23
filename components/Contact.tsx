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
  Spinner,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { NextRouter, useRouter } from "next/router";
import React, { useRef, useState } from "react";

const Contact = (props: any) => {
  const [Loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const router: NextRouter = useRouter();

  // console.log(form.current);
  // const sendEmail = (e: React.SyntheticEvent) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     emailjs
  //       .sendForm(
  //         "service_mixdhlg",
  //         "template_x07cq5p",
  //         form.current,
  //         "J-J8fC6VjigWRwdEZ"
  //       )
  //       .then((res) => {
  //         console.log(res.text);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent maxW={{ base: "90%", lg: "35%" }} borderRadius={"none"}>
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
          <form ref={form}>
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
                  isRequired
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
                  isRequired
                />
              </Box>

              <Box w="100%" borderBottom={"1px solid black"}>
                <Textarea
                  isRequired
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
                {Loading === true ? <Spinner /> : "SEND"}
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Contact;
