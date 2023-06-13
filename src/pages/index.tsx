import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import Image from "next/image";

import image_one from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 1.jpg";
import image_two from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 1 (Variant).jpg";
import image_three from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 2.jpg";
import image_four from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 2 (Variant).jpg";
import image_five from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 3.jpg";
import image_six from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 3 (Variant).jpg";

import slide1 from "../../public/Home PAGE/MAIN Image - Slide 1.jpg";
import slide2 from "../../public/Home PAGE/MAIN Image - Slide 2.jpg";
import slide3 from "../../public/Home PAGE/MAIN Image - Slide 3.jpg";
import slide4 from "../../public/Home PAGE/MAIN Image - Slide 4.jpg";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>PGStudio</title>
        <meta name="description" content="PGStudio" />
        <meta name="description" content="An Architectural Design Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-between"}
        px={{ base: "1rem", lg: "3rem" }}
        mt={{ base: "5rem", lg: "10rem" }}
        height={"max-content"}
        fontFamily={"poppins"}
        display={"flex"}
        pt="7rem"
        gap={{ base: "2rem", lg: "0rem" }}
      >
        <Text
          textTransform={"uppercase"}
          fontWeight={500}
          width={{ base: "80%", lg: "38%" }}
          fontSize={"1.75rem"}
        >
          3d Architectural Rendering and <br />
          Visualization Studio
        </Text>

        <Text
          w={{ base: "90%", lg: "54%" }}
          textTransform={"uppercase"}
          fontWeight={200}
          fontSize={"1.75rem"}
          pr="2rem"
        >
          Producing images that you want to be in, we’re creating a powerful
          non-existent reality. 3D rendering for architects, developers,
          branding agencies and product design companies.
        </Text>
      </Box>

      <Box display={"flex"} alignItems={"flex-start"} mt="5rem">
        <Box w={"100%"}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
            }}
            navigation
            draggable
          >
            <SwiperSlide>
              <Image src={slide1} alt="slide_one Image" />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={slide2} alt="slide_two Image" />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={slide3} alt="slide_three Image" />
            </SwiperSlide>

            <SwiperSlide>
              <Image src={slide4} alt="slide_four Image" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>

      <Box px="3.5rem" py="4rem" mt="1rem" borderY={"1px solid #f0f0f0"}>
        <Text
          w="60%"
          fontSize={"2.75rem"}
          textTransform={"uppercase"}
          fontFamily={"poppins"}
          lineHeight={"3.3rem"}
          fontWeight={400}
          letterSpacing={".1rem"}
        >
          crafting spaces that go beyond aesthetics, and inspire a sense of
          wonder and awe.
        </Text>
      </Box>

      <Box
        justifyContent={"space-between"}
        borderBottom={"1px solid #f0f0f0"}
        display={"flex"}
        px="3.5rem"
        pb="3rem"
        mt="1rem"
      >
        <Text
          textTransform={"uppercase"}
          fontFamily={"poppins"}
          fontSize={"1.6rem"}
          lineHeight={"3rem"}
          w="max-content"
          color="black"
          fontWeight={500}
        >
          our featured projects
        </Text>

        <Text
          fontFamily={"poppins"}
          fontSize={"1.2rem"}
          fontWeight={300}
          w={"50%"}
        >
          Our architecture agency creates unique and innovative projects that
          cater to the individual needs and preference of our clients. From
          concept to completion, we work closely with our clients to bring their
          vision to life, ensuring each project is a reflection of their
          personal style and value
        </Text>
      </Box>

      <Box px="2rem" py="2rem">
        {/* First Row */}
        <>
          <Box fontFamily={"poppins"} textAlign={"center"} mb={"2rem"}>
            <Text fontSize={"1.5rem"} fontWeight={600}>
              Benin Museum
            </Text>
            <Text fontSize={"1rem"} color={"grey"} mt="0rem !important">
              Benin, Nigeria
            </Text>
          </Box>
          <HStack
            justifyContent={"space-between"}
            borderBottom={"1px solid #f0f0f0"}
            pb="1rem"
          >
            <VStack fontFamily={"poppins"} w="50%">
              <Box
                borderRadius={"3px"}
                overflow={"hidden"}
                cursor={"pointer"}
                h={"max-content"}
                maxH={"25rem"}
                w="95%"
              >
                <Image src={image_one} className="home_image" alt="image_one" />
              </Box>
            </VStack>

            <Box height={"25rem"} w={"max-content"}>
              <Divider
                orientation="vertical"
                colorScheme="#000000 !important"
              />
            </Box>

            <VStack fontFamily={"poppins"} w="50%">
              <Box
                w="95%"
                cursor={"pointer"}
                borderRadius={"3px"}
                h={"max-content"}
                overflow={"hidden"}
                maxH={"25rem"}
              >
                <Image src={image_two} className="home_image" alt="image two" />
              </Box>
            </VStack>
          </HStack>
        </>

        {/* Second Row */}
        <>
          <Box fontFamily={"poppins"} textAlign={"center"} mt="5rem" mb="1rem">
            <Text fontSize={"1.5rem"} fontWeight={600}>
              Metropolis
            </Text>
            <Text fontSize={"1rem"} color={"grey"} mt="0rem !important">
              Detriot, USA
            </Text>
          </Box>

          <HStack
            justifyContent={"space-between"}
            borderBottom={"1px solid #f0f0f0"}
            pb="1rem"
          >
            <VStack fontFamily={"poppins"} w="50%">
              <Box
                w="95%"
                cursor={"pointer"}
                borderRadius={"3px"}
                h={"max-content"}
                overflow={"hidden"}
                maxH={"25rem"}
              >
                <Image
                  src={image_three}
                  className="home_image"
                  alt="image_three"
                />
              </Box>
            </VStack>

            <Box height={"25rem"}>
              <Divider
                orientation="vertical"
                colorScheme="#000000 !important"
              />
            </Box>

            <VStack fontFamily={"poppins"} w="50%">
              <Box
                w="95%"
                borderRadius={"3px"}
                overflow={"hidden"}
                cursor={"pointer"}
                h={"max-content"}
                maxH={"25rem"}
                borderTop={".1px solid grey"}
                borderRight={".1px solid grey"}
              >
                <Image
                  alt="image four"
                  className="home_image"
                  src={image_four}
                />
              </Box>
            </VStack>
          </HStack>
        </>

        {/* Third Row  */}
        <>
          <Box
            fontFamily={"poppins"}
            textAlign={"center"}
            mb={"1rem"}
            mt="3rem"
          >
            <Text fontSize={"1.5rem"} fontWeight={600}>
              Service Center
            </Text>
            <Text fontSize={"1rem"} color={"grey"} mt="0rem !important">
              Alabama, USA
            </Text>
          </Box>

          <HStack justifyContent={"space-between"} pb="1rem">
            <VStack fontFamily={"poppins"} w="50%">
              <Box
                w="95%"
                cursor={"pointer"}
                borderRadius={"3px"}
                h={"max-content"}
                overflow={"hidden"}
                maxH={"25rem"}
              >
                <Image
                  src={image_five}
                  className="home_image"
                  alt="image_five"
                />
              </Box>
            </VStack>

            <Box height={"25rem"}>
              <Divider
                orientation="vertical"
                colorScheme="#000000 !important"
              />
            </Box>

            <VStack fontFamily={"poppins"} w="50%">
              <Box
                w="95%"
                cursor={"pointer"}
                borderRadius={"3px"}
                h={"max-content"}
                overflow={"hidden"}
                maxH={"25rem"}
              >
                <Image src={image_six} className="home_image" alt="image six" />
              </Box>
            </VStack>
          </HStack>
        </>
      </Box>
    </>
  );
}
