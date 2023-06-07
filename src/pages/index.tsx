import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

import image_one from "../../public/Home PAGE/HOME Image - 1.jpg";
import image_two from "../../public/Home PAGE/HOME Image - 2.jpg";
import image_three from "../../public/Home PAGE/HOME Image - 3.jpg";
import image_four from "../../public/Home PAGE/HOME Image - 4.jpg";

import slide1 from "../../public/Home PAGE/MAIN Image - Slide 1.jpg";
import slide2 from "../../public/Home PAGE/MAIN Image - Slide 2.jpg";
import slide3 from "../../public/Home PAGE/MAIN Image - Slide 3.jpg";
import slide4 from "../../public/Home PAGE/MAIN Image - Slide 4.jpg";

import Typewriter from "typewriter-effect";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>PGStudio Web</title>
        <meta name="description" content="PGStudio" />
        <meta name="description" content="An Architectural Design Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        justifyContent={"space-between"}
        display={"flex"}
        px="3rem"
        mt="10rem"
        pt="7rem"
        height="max-content"
        fontFamily={"poppins"}
      >
        <Text
          textTransform={"uppercase"}
          fontWeight={500}
          width={"38%"}
          fontSize={"1.75rem"}
        >
          3d Architectural Rendering and <br />
          Visualization Studio
        </Text>

        <Text
          w="54%"
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
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            draggable
            autoplay={{
              delay: 3000,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <Image src={slide1} alt="slide_one" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide2} alt="slide_two" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide3} alt="slide_three" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={slide4} alt="slide_four" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Box px="3.5rem" py="4rem" mt="1rem" borderY={"1px solid #f0f0f0"}>
        {/* <Typewriter
          options={{
            strings: ["Hello world"],
            autoStart: true,
            loop: true,
          }}
        /> */}
        <Text
          w="70%"
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
        display={"flex"}
        px="3.5rem"
        pb="3rem"
        mt="1rem"
        borderBottom={"1px solid #f0f0f0"}
        justifyContent={"space-between"}
      >
        <Text
          w="max-content"
          color="black"
          fontSize={"1.6rem"}
          textTransform={"uppercase"}
          fontFamily={"poppins"}
          lineHeight={"3rem"}
          fontWeight={500}
        >
          our featured projects
        </Text>

        <Text
          w={"50%"}
          fontSize={"1.2rem"}
          fontWeight={300}
          fontFamily={"poppins"}
        >
          Our architecture agency creates unique and innovative projects that
          cater to the individual needs and preference of our clients. From
          concept to completion, we work closely with our clients to bring their
          vision to life, ensuring each project is a reflection of their
          personal style and value
        </Text>
      </Box>

      <Box px="3.5rem" py="2rem">
        <HStack
          justifyContent={"space-between"}
          borderBottom={"1px solid #f0f0f0"}
          mt="1rem"
          pb="1rem"
        >
          <VStack pr="1rem" fontFamily={"poppins"} w="45%">
            <Text fontSize={"1.5rem"} fontWeight={500}>
              Project No.309
            </Text>
            <Text color={"grey"} mt="0rem !important">
              Vancover, Canada
            </Text>
            <Box
              _hover={{ transform: "scale(1.01)" }}
              cursor={"pointer"}
              w="90%"
              h={"max-content"}
              maxH={"25rem"}
            >
              <Image src={slide3} alt="image one" />
            </Box>
          </VStack>

          <Box height={"25rem"}>
            <Divider orientation="vertical" colorScheme="#000000 !important" />
          </Box>

          <VStack fontFamily={"poppins"} w="45%">
            <Text fontSize={"1.5rem"} fontWeight={500}>
              Project No.309
            </Text>
            <Text color={"grey"} mt="0rem !important">
              Vancover, Canada
            </Text>
            <Box w="90%" h={"max-content"} maxH={"25rem"}>
              <Image src={slide1} alt="image one" />
            </Box>
          </VStack>
        </HStack>

        <HStack
          justifyContent={"space-between"}
          borderBottom={"1px solid #f0f0f0"}
          mt="3rem"
          pb="1rem"
        >
          <VStack pr="1rem" fontFamily={"poppins"} w="45%">
            <Text fontSize={"1.5rem"} fontWeight={500}>
              Project No.309
            </Text>
            <Text color={"grey"} mt="0rem !important">
              Vancover, Canada
            </Text>
            <Box
              _hover={{ transform: "scale(1.01)" }}
              cursor={"pointer"}
              w="90%"
              h={"max-content"}
              maxH={"25rem"}
            >
              <Image
                style={{ objectFit: "contain" }}
                src={slide1}
                alt="image threeimage_three"
                height={300}
              />
            </Box>
          </VStack>

          <Box height={"25rem"}>
            <Divider orientation="vertical" colorScheme="#000000 !important" />
          </Box>

          <VStack fontFamily={"poppins"} w="45%">
            <Text fontSize={"1.5rem"} fontWeight={500}>
              Project No.309
            </Text>
            <Text color={"grey"} mt="0rem !important">
              Vancover, Canada
            </Text>
            <Box w="80%" h={"max-content"} maxH={"25rem"}>
              <Image
                style={{ objectFit: "contain" }}
                src={slide4}
                alt="image four"
              />
            </Box>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
