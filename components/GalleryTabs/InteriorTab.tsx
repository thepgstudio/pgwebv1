import { motion, AnimatePresence } from "framer-motion";
import { interiorAssets } from "@/assets/interior";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

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

                    <Box
                      display={
                        mouseMonitors[rowIndex] === true ? "flex" : "none"
                      }
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
                      <Text
                        m={0}
                        fontWeight={500}
                        fontSize={"1.4rem"}
                        color={"white"}
                      >
                        OFFICE CENTER
                      </Text>
                      <Text m={0} color={"white"}>
                        CLIENT: GENSLER
                      </Text>
                      <Text m={0} color={"white"}>
                        LOCATION: SOUTH KOREA
                      </Text>
                    </Box>
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
