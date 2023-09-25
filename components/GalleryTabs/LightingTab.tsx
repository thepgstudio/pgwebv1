import { motion, AnimatePresence } from "framer-motion";
import { lightingAssets } from "@/assets/lighting";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";


const LightingTab = () => {
  const [toggler, setToggler] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <>
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
          {lightingAssets.map((item, rowIndex) => (
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
                  onClick={() => {
                    setToggler(!toggler);
                    setClickedIndex(rowIndex);
                  }}
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
      <FsLightbox
        toggler={toggler}
        sources={lightingAssets[clickedIndex][0].lightbox}
      />
    </>
  );
};

export default LightingTab;
