import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TypeAnimation } from "react-type-animation";
import ServiceSection from "../../components/Services";
import Head from "next/head";
import Image from "next/image";

import image_one from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 1.jpg";
import image_two from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 1 (Variant).jpg";
import image_three from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 2.jpg";
import image_four from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 2 (Variant).jpg";
import image_five from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 3.jpg";
import image_six from "../../public/Home PAGE/drive-download-20230613T094156Z-001/HOME Image - 3 (Variant).jpg";

import slide1 from "../../public/Home PAGE/MAIN Image - Slide 5.jpg";
import slide2 from "../../public/Home PAGE/MAIN Image - Slide 2.jpg";
import slide3 from "../../public/Home PAGE/MAIN Image - Slide 8-1.jpg";
import slide4 from "../../public/Home PAGE/MAIN Image - Slide 10.jpg";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="3d Architectural Rendering and Visualization Studio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="PGStudio" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/pgfavicon.png" />
      </Head>

      <Box
        flexDirection={{ base: "column", lg: "row" }}
        mt={{ base: "2rem", lg: "10rem" }}
        gap={{ base: "1.75rem", lg: "0rem" }}
        px={{ base: "1rem", lg: "2rem" }}
        justifyContent={"space-between"}
        height={"max-content"}
        fontFamily={"poppins"}
        display={"flex"}
        pt={"7rem"}
      >
        <Text
          fontSize={{ base: "1.65rem", lg: "2rem" }}
          width={{ base: "100%", lg: "38%" }}
          textTransform={"uppercase"}
          letterSpacing={".1rem"}
          fontWeight={400}
        >
          3d Architectural Rendering and Visualization Studio
        </Text>

        <Text
          fontSize={{ base: "1.35rem", lg: "1.75rem" }}
          w={{ base: "100%", lg: "54%" }}
          textTransform={"uppercase"}
          fontWeight={200}
        >
          Creating images tailored to your preferences, we are crafting a potent
          virtual reality. Our 3D rendering services cater to Architects,
          Interior Designers, Developers, Branding Agencies, and Product Design
          firms.
        </Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"flex-start"}
        mt={{ base: "2rem", lg: "5rem" }}
      >
        <Box w={"100%"}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
            }}
            draggable
            loop={true}
          >
            <SwiperSlide>
              <Image
                src={slide1}
                alt="slide_one Image"
                placeholder="blur"
                priority
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={slide2}
                alt="slide_two Image"
                placeholder="blur"
                priority
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={slide4}
                alt="slide_four Image"
                placeholder="blur"
                priority
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={slide3}
                alt="slide_three Image"
                placeholder="blur"
                priority
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>

      <Box
        px={{ base: "1rem", lg: "2rem" }}
        py={{ base: "2rem", lg: "4rem" }}
        borderY={"1px solid #f0f0f0"}
        mt={{ base: "0rem", lg: "1rem" }}
        id="services"
        fontSize={{ base: "1.75rem", lg: "2.75rem" }}
        lineHeight={{ base: "2.75rem", lg: "3.3rem" }}
        fontWeight={{ base: 300, lg: 200 }}
        w={{ base: "100%", lg: "55%" }}
        textTransform={"uppercase"}
        letterSpacing={".02rem"}
        fontFamily={"poppins"}
      >
        <TypeAnimation
          sequence={[
            "crafting spaces that go beyond aesthetics, and",
            "crafting spaces that go beyond aesthetics, and inspire a sense of wonder and awe.",
            3000,
          ]}
          repeat={Infinity}
          speed={20}
          deletionSpeed={40}
          preRenderFirstString
        />
      </Box>

      <ServiceSection />

      <Box
        justifyContent={{ base: "center", lg: "space-between" }}
        borderY={"1px solid #f0f0f0"}
        px={{ base: "1rem", lg: "2rem" }}
        display={{ base: "none", lg: "flex" }}
        py={{ base: "1.5rem", lg: "3rem" }}
        mt="3rem"
      >
        <Text
          fontSize={{ base: "1.5rem", lg: "2rem" }}
          textTransform={"uppercase"}
          fontFamily={"poppins"}
          lineHeight={"3rem"}
          w={"max-content"}
          color={"black"}
          fontWeight={400}
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

      <Box px={{ base: "1rem", lg: "2rem" }} py={{ base: "1rem", lg: "2rem" }}>
        {/* First Row */}
        <>
          <Box fontFamily={"poppins"} textAlign={"center"} mb={"2rem"}>
            <Text
              fontSize={{ base: "1.25rem", lg: "1.5rem" }}
              fontWeight={{ base: 500, lg: 600 }}
              textTransform={"uppercase"}
            >
              The African Museum
            </Text>
            <Text fontSize={"1rem"} color={"grey"} mt="0rem !important">
              Abuja, Nigeria
            </Text>
          </Box>
          <HStack
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "1rem", lg: "0rem" }}
            borderBottom={"1px solid #f0f0f0"}
            justifyContent={"space-between"}
            pb="1rem"
          >
            <VStack fontFamily={"poppins"} w={{ base: "100%", lg: "50%" }}>
              <Box
                h={{ base: "15rem", md: "20rem", lg: "max-content" }}
                w={{ base: "100%", lg: "100%" }}
                overflow={"hidden"}
                cursor={"pointer"}
                maxH={"30rem"}
                objectFit={"cover"}
              >
                <Image
                  src={image_one}
                  className="home_image"
                  alt="image_one"
                  placeholder="blur"
                  style={{ objectFit: "fill" }}
                />
              </Box>
            </VStack>

            <VStack fontFamily={"poppins"} w={{ base: "100%", lg: "50%" }}>
              <Box
                h={{ base: "15rem", md: "20rem", lg: "max-content" }}
                w={{ base: "100%", lg: "100%" }}
                cursor={"pointer"}
                overflow={"hidden"}
                maxH={"30rem"}
              >
                <Image
                  src={image_two}
                  className="home_image"
                  alt="image two"
                  placeholder="blur"
                />
              </Box>
            </VStack>
          </HStack>
        </>

        {/* Second Row */}
        <>
          <Box
            mt={{ base: "3rem", lg: "5rem" }}
            fontFamily={"poppins"}
            textAlign={"center"}
            mb="1rem"
          >
            <Text
              fontSize={{ base: "1.25rem", lg: "1.5rem" }}
              fontWeight={{ base: 500, lg: 600 }}
            >
              INSPIRADORA
            </Text>
            <Text fontSize={"1rem"} color={"grey"} mt="0rem !important">
              Miami, USA
            </Text>
          </Box>

          <HStack
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "1rem", lg: "0rem" }}
            borderBottom={"1px solid #f0f0f0"}
            justifyContent={"space-between"}
            pb="1rem"
          >
            <VStack fontFamily={"poppins"} w={{ base: "100%", lg: "50%" }}>
              <Box
                w={{ base: "100%", lg: "100%" }}
                h={{ base: "15rem", md: "20rem", lg: "max-content" }}
                cursor={"pointer"}
                overflow={"hidden"}
                maxH={"30rem"}
              >
                <Image
                  src={image_three}
                  className="home_image"
                  alt="image_three"
                  placeholder="blur"
                />
              </Box>
            </VStack>

            <VStack fontFamily={"poppins"} w={{ base: "100%", lg: "50%" }}>
              <Box
                h={{ base: "15rem", md: "20rem", lg: "max-content" }}
                w={{ base: "100%", lg: "100%" }}
                borderTop={".1px solid grey"}
                borderRight={".1px solid grey"}
                overflow={"hidden"}
                cursor={"pointer"}
                maxH={"30rem"}
              >
                <Image
                  alt="image four"
                  className="home_image"
                  src={image_four}
                  placeholder="blur"
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
            <Text
              fontSize={{ base: "1.25rem", lg: "1.5rem" }}
              fontWeight={{ base: 500, lg: 600 }}
            >
              THE RCCG
            </Text>
            <Text fontSize={"1rem"} color={"grey"} mt="0rem !important">
              New York, USA
            </Text>
          </Box>

          <HStack
            flexDir={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            gap={{ base: "1rem", lg: "0rem" }}
            pb="1rem"
          >
            <VStack fontFamily={"poppins"} w={{ base: "100%", lg: "50%" }}>
              <Box
                h={{ base: "15rem", md: "20rem", lg: "max-content" }}
                w={{ base: "100%", lg: "100%" }}
                cursor={"pointer"}
                overflow={"hidden"}
                maxH={"30rem"}
              >
                <Image
                  src={image_five}
                  className="home_image"
                  alt="image_five"
                  placeholder="blur"
                />
              </Box>
            </VStack>

            <VStack fontFamily={"poppins"} w={{ base: "100%", lg: "50%" }}>
              <Box
                w={{ base: "100%", lg: "100%" }}
                h={{ base: "15rem", md: "20rem", lg: "max-content" }}
                cursor={"pointer"}
                overflow={"hidden"}
                maxH={"30rem"}
              >
                <Image
                  src={image_six}
                  className="home_image"
                  alt="image six"
                  placeholder="blur"
                />
              </Box>
            </VStack>
          </HStack>
        </>
      </Box>
    </>
  );
}
