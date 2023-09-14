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
        gap={"2rem"}
        mt={"3rem"}
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
          fontSize={{ base: "1.5rem", lg: "1.75rem" }}
          w={{ base: "100%", lg: "55%" }}
          textTransform={"uppercase"}
          ml={"0rem !important"}
          fontWeight={200}
        >
          At PGStudio, our experts have mastered the art of attaining a
          photorealism level that stands unmatched by alternative modes of
          depiction.
        </Text>
      </HStack>

      <Box
        flexDirection={{ base: "column", md: "row" }}
        pt={{ base: "5rem", md: "7rem" }}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        display={"flex"}
      >
        <Box width={{ base: "100%", md: "30%" }}>
          <Text fontWeight={500} fontSize={"1.5rem"}>
            THE ART OF VISUALIZATION IS A BLEND OF ARTISTIC AND TECHNICAL FLAIR.
          </Text>
          <Text
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
            pt={"1rem"}
          >
            The history begins with a highly ambitious individual. Our founder,
            a well-educated and skilled graduate in this field, has
            revolutionized architectural design and visualization. With an
            international impact, we&apos;ve created a portfolio of <b>305+</b> realistic
            images from about <b>47</b> projects worldwide.
          </Text>
          <Text
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
            pt={"1rem"}
          >
            This journey started with a passion for blending imagination and
            reality, crafting functional and aesthetic designs that convey
            distinctive architectural stories.
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
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
            pt={"1rem"}
          >
            By assembling an <b>8+</b> member team of like-minded experts, the
            founder&apos;s holistic design approach garnered international
            acclaim. We&apos;ve turned architectural visualization into an art,
            blending technology and creativity to depict projects
            pre-construction.
          </Text>
          <Text
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            fontWeight={200}
            pt={"1rem"}
          >
            As sustainability advocates, we&apos;ve pioneered eco-conscious
            architecture, reshaping our built environments.
          </Text>
        </Box>

        <>
          <Box
            _hover={{ transform: "scale(1.01)" }}
            width={{ base: "100%", md: "35%" }}
            justifyContent={"space-between"}
            transition={"all .3s"}
            background={"black"}
            cursor={"pointer"}
            display={"flex"}
            onClick={onOpen}
            height={"12rem"}
            p={"2rem"}
          >
            <Text color={"white"} fontSize={"1.2rem"}>
              CONTACT US WITH NEW <br /> BUSINESS ENQUIRY
            </Text>
            <ArrowForwardIcon color={"white"} width={"3 rem"} height={"2rem"} />
          </Box>
          <Contact isOpen={isOpen} onClose={onClose} />
        </>
      </Box>

      <Box pt="3rem" width={{ base: "100%", md: "65%" }}>
        <Text fontWeight={500} fontSize={"1.5rem"}>
          OUR PARTNERS
        </Text>
        <Text textTransform={"uppercase"} fontSize={"1.3rem"} fontWeight={200}>
          We are passionate about transforming architectural visions into
          stunning visual realities. Our commitment to innovation and
          collaboration has led us to partner with accomplished architects,
          developers and designers generally, making us a trusted partner in
          bringing architectural designs to life.
        </Text>
      </Box>

      <LogoMarquee logos={patners} />
    </Box>
  );
};

export default Company;
