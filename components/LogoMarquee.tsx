import { Flex, Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import React from "react";

interface LogoMarqueeProps {
  logos: StaticImageData[];
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos }) => {
  return (
    <Marquee autoFill pauseOnHover speed={80} gradient gradientWidth={100}>
      <Box
        display={"flex"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        // gap={".5rem"}
        mt={"3rem"}
        pl={"2rem"}
      >
        {logos.map((logo, index) => (
          <Box w={{base:"7rem",md:"12rem"}} key={index} ml={index === 0 ? "0rem" : "1.2rem"}>
            <Image src={logo} alt={`Company Logo ${index}`} />
          </Box>
        ))}
      </Box>
    </Marquee>
  );
};

export default LogoMarquee;
