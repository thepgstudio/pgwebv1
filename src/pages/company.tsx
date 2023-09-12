import {
  Box,
  HStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { patners } from "@/util";
import LogoMarquee from "../../components/LogoMarquee";
import Contact from "../../components/Contact";

const Company = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      fontFamily={"poppins"}
      mt={{ base: "10rem", lg: "17rem" }}
      mb={{ base: "5rem", lg: "10rem" }}
      pr={{ base: "1rem", lg: "2rem" }}
      pl={{ base: "1rem", lg: "3rem" }}
    >
      <HStack>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontWeight={300} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color={"#BABABA"} fontWeight={200} href="#">
              Company
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <HStack
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        display={"flex"}
        gap="2rem"
        mt="3rem"
      >
        <Text
          w={{ base: "100%", lg: "50%" }}
          fontSize={{ base: "1.6rem", lg: "1.75rem" }}
          fontWeight={400}
        >
          THE ART OF VISUALIZATION IS A BLEND OF <br />
          ARTISTIC AND TECHNICAL FLAIR.
        </Text>
        MASTER
        <Text
          ml={"0rem !important"}
          w={{ base: "100%", lg: "55%" }}
          fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          fontWeight={200}
          textTransform={"uppercase"}
        >
          At PGStudio, our experts have mastered the art of attaining a
          photorealism level that stands unmatched by alternative modes of
          depiction.
        </Text>
      </HStack>

      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        pt={{ base: "5rem", md: "7rem" }}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Box width={{ base: "100%", md: "30%" }}>
          <Text fontWeight={500} fontSize={"1.5rem"}>
            THE ART OF VISUALIZATION IS A BLEND OF ARTISTIC AND TECHNICAL FLAIR.
          </Text>
          <Text
            pt={"1rem"}
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
          >
            The history commences with an individual driven by great ambition.
            Our founder, a well taught and professional graduate with
            exceptional talent in this field, has redefined architectural design
            and visualization. With an international impact, we have curated a
            portfolio of over 305 realistic images across 47 diverse projects
            worldwide.
          </Text>
          <Text
            pt={"1rem"}
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
          >
            The journey began with a passion for bridging imagination and
            reality, crafting functional and aesthetic designs that tell unique
            architectural stories.
          </Text>
        </Box>

        <Box
          width={{ base: "100%", md: "30%" }}
          py={{ base: "2rem", md: "0rem" }}
        >
          <Text fontWeight={500} fontSize={"1.5rem"}>
            WHO WE ARE AT PGSTUDIO.
          </Text>
          <Text
            pt={"1rem"}
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
          >
            Assembling a team of 8+ like-minded experts, the founder&apos;s
            holistic approach to design led to international acclaim. We have
            transformed architectural visualization into an art form, marrying
            technology and creativity to bring projects to life before
            construction.
          </Text>
          <Text
            pt={"1rem"}
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
          >
            An advocate for sustainability, our firm has pioneered
            environmentally conscious architecture, leaving an indelible mark on
            the very essence of how we experience built environments.
          </Text>
        </Box>

        <>
          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.01)" }}
            transition={"all .3s"}
            background={"black"}
            justifyContent={"space-between"}
            display={"flex"}
            height={"12rem"}
            width={{ base: "100%", md: "35%" }}
            p={"2rem"}
            onClick={onOpen}
          >
            <Text color={"white"} fontSize={"1.2rem"}>
              CONTACT US WITH NEW <br /> BUSINESS ENQUIRY
            </Text>
            <ArrowForwardIcon color={"white"} width={"3 rem"} height={"2rem"} />
          </Box>
          <Contact isOpen={isOpen} onClose={onClose}/>
        </>
      </Box>

      <Box pt="3rem" width={{ base: "100%", md: "65%" }}>
        <Text fontWeight={500} fontSize={"1.5rem"}>
          OUR PARTNERS
        </Text>
        <Text fontSize={"1.3rem"} fontWeight={200}>
          We are passionate about transforming architectural visions into
          stunning visual realities. Our commitment to innovation and
          collaboration has led us to partner with accomplished architects,
          developers and designers generally, making us a trusted partner in
          bringing architectural designs to life.
        </Text>
      </Box>

      <LogoMarquee logos={patners} />
    </Box>
  );
};

export default Company;
