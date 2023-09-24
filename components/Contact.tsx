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
} from "@chakra-ui/react";
import React, { useState } from "react";

const Contact = (props: any) => {
  const [Loading, setLoading] = useState(false);
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        body: JSON.stringify(formData),
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
          message: "",
        });
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
