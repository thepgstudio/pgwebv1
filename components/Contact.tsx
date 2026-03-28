import {
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Modal,
  Box,
  Button,
  Text,
  Input,
  VStack,
  Textarea,
  Spinner,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const Contact = (props: any) => {
  const [Loading, setLoading] = useState(false);
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [consentTransactional, setConsentTransactional] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          consentTransactional,
          consentMarketing,
        }),
      });

      if (response.status === 200) {
        console.log("Form submitted successfully");
        toast({
          position: "top",
          duration: 2000,
          isClosable: true,
          render: () => (
            <Box
              fontFamily={"poppins"}
              fontSize={"1.2rem"}
              borderRadius={"5px"}
              textAlign="center"
              color={"white"}
              fontWeight={500}
              bg="black"
              p={3}
            >
              We received your message. We will respond shortly!
            </Box>
          ),
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setConsentTransactional(false);
        setConsentMarketing(false);
      } else {
        console.error("Error submitting form");
        toast({
          position: "top",
          duration: 2000,
          isClosable: true,
          render: () => (
            <Box
              fontFamily={"poppins"}
              textAlign={"center"}
              borderRadius={"5px"}
              fontSize={"1.2rem"}
              fontWeight={500}
              color={"white"}
              bg={"red"}
              p={5}
            >
              An Error Occurred! Please Try again
            </Box>
          ),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        position: "top",
        duration: 2000,
        isClosable: true,
        render: () => (
          <Box
            fontFamily={"poppins"}
            textAlign={"center"}
            borderRadius={"5px"}
            fontSize={"1.2rem"}
            fontWeight={500}
            color={"white"}
            bg={"red"}
            p={5}
          >
            An Error Occurred! Please Try again
          </Box>
        ),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent maxW={{ base: "90%", lg: "35%" }} borderRadius={"none"}>
        <ModalCloseButton size={"lg"} />

        <ModalBody fontFamily={"poppins"} p={{ base: "2rem", md: "3rem" }}>
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
          <form onSubmit={handleSubmit}>
            <VStack gap="2rem">
              <Box w="100%" borderBottom={"1px solid black"}>
                <Input
                  _placeholder={{ color: "#000000" }}
                  focusBorderColor="transparent"
                  borderRadius={"0rem"}
                  placeholder="NAME"
                  m={"0rem"}
                  p={"0rem"}
                  w={"100%"}
                  border={"none"}
                  type={"text"}
                  name={"name"}
                  value={formData.name}
                  onChange={handleChange}
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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isRequired
                />
              </Box>

              <Box w="100%" borderBottom={"1px solid black"}>
                <Input
                  _placeholder={{ color: "#000000" }}
                  focusBorderColor="transparent"
                  borderRadius={"0rem"}
                  placeholder="PHONE NUMBER"
                  m={"0rem"}
                  p={"0rem"}
                  w="100%"
                  border="none"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Box>

              <VStack w="100%" gap={"1rem"} alignItems={"flex-start"}>
                <Checkbox
                  isChecked={consentTransactional}
                  onChange={(e) => setConsentTransactional(e.target.checked)}
                  alignItems={"flex-start"}
                  colorScheme="blackAlpha"
                  w="100%"
                  sx={{
                    ".chakra-checkbox__control": {
                      borderColor: "black",
                      borderRadius: "0",
                      mt: ".15rem",
                    },
                    ".chakra-checkbox__control[data-checked]": {
                      bg: "black",
                      borderColor: "black",
                    },
                  }}
                >
                  <Text fontSize={".75rem"} fontWeight={300} lineHeight={"1.7"} color={"#444"}>
                    I consent to receive transactional messaging from PGStudio at the phone number provided. Message frequency may vary. Messages and Data rates may apply. Reply HELP for help or STOP to opt out.
                  </Text>
                </Checkbox>

                <Checkbox
                  isChecked={consentMarketing}
                  onChange={(e) => setConsentMarketing(e.target.checked)}
                  alignItems={"flex-start"}
                  colorScheme="blackAlpha"
                  w="100%"
                  sx={{
                    ".chakra-checkbox__control": {
                      borderColor: "black",
                      borderRadius: "0",
                      mt: ".15rem",
                    },
                    ".chakra-checkbox__control[data-checked]": {
                      bg: "black",
                      borderColor: "black",
                    },
                  }}
                >
                  <Text fontSize={".75rem"} fontWeight={300} lineHeight={"1.7"} color={"#444"}>
                    I consent to receive marketing and promotional messages from PGStudio at the phone number provided. Message frequency may vary. Messages & Data rates may apply. Reply HELP for help and STOP to opt out.
                  </Text>
                </Checkbox>
              </VStack>

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

              <Text fontSize={".7rem"} fontWeight={300} color={"#888"} textAlign={"center"} lineHeight={"1.7"}>
                By submitting this form you agree to our{" "}
                <Text
                  as={Link}
                  href="/terms-and-conditions"
                  target="_blank"
                  fontWeight={500}
                  color={"black"}
                  borderBottom={"1px solid black"}
                  _hover={{ color: "#bababa", borderColor: "#bababa" }}
                >
                  Terms and Conditions
                </Text>{" "}
                and{" "}
                <Text
                  as={Link}
                  href="/privacy-policy"
                  target="_blank"
                  fontWeight={500}
                  color={"black"}
                  borderBottom={"1px solid black"}
                  _hover={{ color: "#bababa", borderColor: "#bababa" }}
                >
                  Privacy Policy
                </Text>
                .
              </Text>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Contact;
