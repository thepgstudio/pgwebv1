import { motion, AnimatePresence } from "framer-motion";
import { lightingAssets } from "@/assets/lighting";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import ImageLabel from "../ImageLabel";

const LightingTab = () => {
  const [toggler, setToggler] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);


  const [mouseMonitors, setMouseMonitors] = useState(
    Array(lightingAssets.length).fill(false)
  );

  const handleMouseEnter = (rowIndex: number) => {
    const updatedMonitors = [...mouseMonitors];
    updatedMonitors[rowIndex] = true;
    setMouseMonitors(updatedMonitors);
  };

  const handleMouseLeave = (rowIndex: number) => {
    const updatedMonitors = [...mouseMonitors];
    updatedMonitors[rowIndex] = false;
    setMouseMonitors(updatedMonitors);
  };

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
          gap={{ base: "1rem", lg: "2.5rem" }}
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
                  onMouseEnter={() => handleMouseEnter(rowIndex)}
                  onMouseLeave={() => handleMouseLeave(rowIndex)}
                >
                  <Image
                    key={index}
                    src={image}
                    alt="gallery image"
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  <ImageLabel
                    mouseMonitors={mouseMonitors}
                    content={item[0].content}
                    rowIndex={rowIndex}
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
          ...lightingAssets[clickedIndex][0].maindisplay,
          ...lightingAssets[clickedIndex][0].lightbox,
        ]}
      />
    </>
  );
};

export default LightingTab;
