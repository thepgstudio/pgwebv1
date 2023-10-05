import { motion, AnimatePresence } from "framer-motion";
import { exteriorAssets } from "@/assets/exterior";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import ImageLabel from "../ImageLabel";

const ExteriorTab = () => {
  const [toggler, setToggler] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  const [mouseMonitors, setMouseMonitors] = useState(
    Array(exteriorAssets.length).fill(false)
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
          gap={{ base: "1rem", lg: "2rem" }}
        >
          {exteriorAssets.map((item, rowIndex) => (
            <Box
              flexDir={{ base: "column", lg: "row" }}
              display={"flex"}
              key={rowIndex}
              width={"100%"}
              gap={"2rem"}
            >
              {item[0].maindisplay.map((image, index) => (
                <Box
                  key={index}
                  minH={{ base: "15rem", lg: "30rem" }}
                  width={{ base: "100%", lg: "50%" }}
                  height={"max-content"}
                  position={"relative"}
                  cursor={"pointer"}
                  onClick={() => {
                    setToggler(!toggler);
                    setClickedIndex(rowIndex);
                  }}
                  onMouseEnter={() => handleMouseEnter(rowIndex)}
                  onMouseLeave={() => handleMouseLeave(rowIndex)}
                >
                  <Image
                    style={{ objectFit: "cover" }}
                    alt="gallery image"
                    key={index}
                    src={image}
                    fill
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
          ...exteriorAssets[clickedIndex][0].maindisplay,
          ...exteriorAssets[clickedIndex][0].lightbox,
        ]}
      />
    </>
  );
};

export default ExteriorTab;
