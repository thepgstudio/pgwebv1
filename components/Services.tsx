import { Box, Text } from "@chakra-ui/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Thumbs,
  A11y,
} from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import patternbackground from "../public/texture/v880-kul-12-min.jpg";
import Image from "next/image";

import iconvirtualtours from "../public/assets/ICONs/360 VIRTUAL TOURS.svg";
import iconarchi from "../public/assets/ICONs/ARCHITECTURAL VISUALIZATION.svg";
import icon3drendering from "../public/assets/ICONs/REAL ESTATE 3D RENDERING.svg";
import icon3dmodelling from "../public/assets/ICONs/3D MODELING.svg";
import icon3danimation from "../public/assets/ICONs/3D ANIMATION.svg";

const ServiceSection = () => {
  const data = [
    [
      "3D MODELING",
      "We turn drawings into expertly crafted, realistic, and customized physical models, employing skilled artists, advanced software, and accurate quality control to fulfill diverse client needs across industries.",
      icon3dmodelling,
    ],
    [
      "ARCHITECTURAL VISUALIZATION",
      "Creating photorealistic and immersive representations of architectural designs using cutting-edge software, skilled professionals, and meticulous attention to details.",
      iconarchi,
    ],
    [
      "3D ANIMATION",
      "Crafting detailed 3D architectural animations that are not only technically sophisticated but also filled with compelling emotional resonance.",
      icon3danimation,
    ],
    [
      "360 VIRTUAL TOURS",
      "Our architectural 360 virtual tours create immersive, interactive architectural experiences for effective property showcasing and user exploration from anywhere.",
      iconvirtualtours,
    ],
    [
      "REAL ESTATE 3D RENDERING",
      "Unlock Your Client's Heart with the Power of Digital Tools. Increase your sales probability through skillfully custom-made visualizations. Our Renderings always ensure captivating property imagery.",
      icon3drendering,
    ],
  ];
  return (
    <Box
      px={{ base: "1rem", lg: "2rem" }}
      fontFamily={"poppins"}
      pb={"1rem"}
      
    >
      <Text
        fontSize={{ base: "1.75rem", lg: "2rem" }}
        mt={{ base: "1.5rem", md: "2rem" }}
        mb={{ base: "1.5rem", md: "2rem" }}
        fontFamily={"poppins"}
        textAlign={"center"}
        fontWeight={500}
      >
        WHAT WE DO?
      </Text>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
        autoplay={{
          delay: 3000,
        }}
        grabCursor={true}
        pagination={true}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              backgroundImage={patternbackground.src}
              className={"swiper-container"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              justifyContent={"center"}
              backgroundSize={"cover"}
              position={"relative"}
              alignItems={"center"}
              flexDir={"column"}
              height={"25rem"}
              display={"flex"}
              boxShadow={"lg"}
              gap={"1.5rem"}
            >
              <Box width={"5rem"}>
                <Image src={item[2]} alt="icon" />
              </Box>
              <Text
                textAlign={"center"}
                fontSize={{ base: "1.25rem", md: "1.5rem", lg: "1.65rem" }}
                fontWeight={500}
              >
                {item[0]}
              </Text>
              <Text textAlign={"center"} px={{ base: "1.5rem", md: "2.5rem" }}>
                {item[1]}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ServiceSection;
