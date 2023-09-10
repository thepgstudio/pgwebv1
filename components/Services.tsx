import { Box, Text, effect } from "@chakra-ui/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import patternbackground from "../public/assets/ICONs/86390.jpg";
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
      id="services"
    >
      <Text
        fontSize={{ base: "2rem", lg: "2rem" }}
        fontFamily={"poppins"}
        textAlign={"center"}
        fontWeight={500}
        my={"2rem"}
      >
        WHAT WE DO
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
              className={"swiper-container"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"25rem"}
              display={"flex"}
              boxShadow={"lg"}
              gap={"1.5rem"}
              flexDir={"column"}
              borderRadius={".5rem"}
              position={"relative"}
            >
              {/* <Box top={0} maxW={"max-content"}>
                <Image src={patternbackground} style={{transform:"scale(1.02)"}} alt="pattern background" />
              </Box> */}
              <Box width={"5rem"}>
                <Image src={item[2]} alt="icon" />
              </Box>
              <Text textAlign={"center"} fontSize={"1.65rem"} fontWeight={500}>
                {item[0]}
              </Text>
              <Text textAlign={"center"} px="2.5rem">
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
