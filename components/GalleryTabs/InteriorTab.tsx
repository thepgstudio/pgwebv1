import { motion, AnimatePresence } from "framer-motion";
import { interiorAssets } from "@/assets/interior";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import ImageLabel from "../ImageLabel";

const InteriorTab = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [toggler, setToggler] = useState(false);

  const [mouseMonitors, setMouseMonitors] = useState(
    Array(interiorAssets.length).fill(false)
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
          initial={{ scale: 0.75 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.75 }}
          as={motion.div}
          flexDir={"column"}
          display={"flex"}
          width={"100%"}
          gap={{ base: "1rem", lg: "2.5rem" }}
        >
          {interiorAssets.map((item, rowIndex) => (
            <>
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
                    className={`image ${index}`}
                    onClick={() => {
                      setToggler(!toggler);
                      setClickedIndex(rowIndex);
                      console.log(rowIndex);
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
                      className={`image ${index}`}
                    />

                    <ImageLabel
                      mouseMonitors={mouseMonitors}
                      rowIndex={rowIndex}
                      content={item[0].content}
                    />
                  </Box>
                ))}
              </Box>
            </>
          ))}
        </Box>
      </AnimatePresence>
      <FsLightbox
        toggler={toggler}
        sources={[
          ...interiorAssets[clickedIndex][0].maindisplay,
          ...interiorAssets[clickedIndex][0].lightbox,
        ]}
      />
    </>
  );
};

export default InteriorTab;
