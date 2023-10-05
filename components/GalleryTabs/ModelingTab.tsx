import { motion, AnimatePresence } from "framer-motion";
import { modellingAssets } from "@/assets/modelling";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

const ModellingTab = () => {
  const [toggler, setToggler] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <>
      <AnimatePresence>
        <Box
          gap={{ base: "1rem", lg: "2.5rem" }}
          initial={{ scale: 0.75 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.75 }}
          flexDir={"column"}
          display={"flex"}
          as={motion.div}
          width={"100%"}
        >
          {modellingAssets.map((item, rowIndex) => (
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
        sources={[
          ...modellingAssets[clickedIndex][0].maindisplay,
          ...modellingAssets[clickedIndex][0].lightbox,
        ]}
      />
    </>
  );
};

export default ModellingTab;
