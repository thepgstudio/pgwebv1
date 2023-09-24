import { motion, AnimatePresence } from "framer-motion";
import { interiorAssets } from "@/assets/interior";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const InteriorTab = () => {
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
      >
        {interiorAssets.map((item, rowIndex) => (
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
                minH={{ base: "15rem", lg: "30rem" }}
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

export default InteriorTab;
