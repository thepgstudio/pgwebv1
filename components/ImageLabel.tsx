import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type ImageLabelProps = {
  mouseMonitors: any;
  rowIndex: number;
  content: string[];
};

const ImageLabel: React.FC<ImageLabelProps> = ({
  mouseMonitors,
  rowIndex,
  content,
}) => {
  return (
    <AnimatePresence>
      <Box
        display={
          mouseMonitors[rowIndex] === true && content.length !== 0
            ? "flex"
            : "none"
        }
        as={motion.div}
        flexDirection={"column"}
        fontFamily={"poppins"}
        position={"absolute"}
        background={"black"}
        opacity={0.7}
        left={0}
        top={10}
        px={"2rem"}
        py={"1rem"}
        gap={0}
      >
        <Text m={0} fontWeight={500} fontSize={"1.4rem"} color={"white"}>
          {content[0]}
        </Text>
        <Text m={0} color={"white"}>
          {content[1]}
        </Text>
        <Text m={0} color={"white"}>
          {content[2]}
        </Text>
      </Box>
    </AnimatePresence>
  );
};

export default ImageLabel;
