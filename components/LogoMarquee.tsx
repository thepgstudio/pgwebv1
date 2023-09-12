import { Flex, Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface LogoMarqueeProps {
  logos: StaticImageData[];
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      gap={"2rem"}
      alignItems={"center"}
      width={"max-content"}
      mt="3rem"
      className="flex-container"
    >
      {logos.map((logo, index) => (
        <Box w={"10rem"} key={index} ml={index === 0 ? "0rem" : "1.2rem"}>
          <Image src={logo} alt={`Company Logo ${index}`} />
        </Box>
      ))}
    </Flex>
  );
};

export default LogoMarquee;
