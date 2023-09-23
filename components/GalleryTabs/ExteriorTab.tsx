import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

import gallerydemo from "../../public/assets/gallery/gallery_demo.jpg";

const ExteriorTab = () => {
  return (
    <AnimatePresence>
      <Box
        flexDir={{ base: "column", lg: "row" }}
        initial={{ scale: 0.75 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.75 }}
        display={"flex"}
        as={motion.div}
        width={"100%"}
        gap={".5rem"}
        mt={"1rem"}
      >
        <Box cursor={"pointer"}>
          <Image src={gallerydemo} alt="gallery demo image" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src={gallerydemo} alt="gallery demo image" />
        </Box>
      </Box>
    </AnimatePresence>
  );
};

export default ExteriorTab;
