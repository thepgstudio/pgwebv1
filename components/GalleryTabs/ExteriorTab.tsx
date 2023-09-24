import { motion, AnimatePresence } from "framer-motion";
import { exteriorAssets } from "@/assets/exterior";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const ExteriorTab = () => {
  return (
    <AnimatePresence>
      <Box
        flexDir={"column"}
        initial={{ scale: 0.75 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.75 }}
        display={"flex"}
        as={motion.div}
        width={"100%"}
        gap={"1rem"}
        mt={"1rem"}
      >
        {exteriorAssets.map((item, rowIndex) => (
          <Box
            flexDir={{ base: "column", lg: "row" }}
            key={rowIndex}
            display={"flex"}
            gap={"1rem"}
            width={"100%"}
          >
            {item[0].maindisplay.map((image, index) => (
              <Box
                key={index}
                width={{ base: "100%", lg: "50%" }}
                minH={{ base: "20rem", lg: "30rem" }}
                height={"max-content"}
                cursor={"pointer"}
                position={"relative"}
              >
                <Image
                  key={index}
                  src={image}
                  alt="gallery image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </AnimatePresence>
  );
};

export default ExteriorTab;
