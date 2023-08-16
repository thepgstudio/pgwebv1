import { Box, Text, effect } from "@chakra-ui/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import icon from "../public/icons/low-poly-svgrepo-com.svg";

const ServiceSection = () => {
  const data = [
    [
      "ARCHITECTURAL VISUALIZATION",
      "Creating photorealistic and immersive representations of architectural designs using cutting-edge software, skilled professionals, and meticulous attention to details.",
    ],
    [
      "3D MODELING",
      "We turn drawings into expertly crafted, realistic, and customized physical models, employing skilled artists, advanced software, and accurate quality control to fulfill diverse client needs across industries.",
    ],

    [
      "3D ANIMATION",
      "Crafting detailed 3D architectural animations that are not only technically sophisticated but also filled with compelling emotional resonance.",
    ],
    [
      "360 VIRTUAL TOURS",
      "Our architectural 360 virtual tours create immersive, interactive architectural experiences for effective property showcasing and user exploration from anywhere.",
    ],
    [
      "REAL ESTATE 3D RENDERING",
      "Unlock Your Client's Heart with the Power of Digital Tools. Increase your sales probability through skillfully custom-made visualizations. Our Renderings always ensure captivating property imagery.",
    ],
  ];
  return (
    <Box px={{base:"1rem",lg:"2rem"}} pb={"1rem"} id="services" fontFamily={"poppins"}>
      <Text
        textAlign={"center"}
        my={"2rem"}
        fontFamily={"poppins"}
        fontSize={{base:"1.75rem",lg:"2.5rem"}}
        fontWeight={400}
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
              className="swiper-container"
              justifyContent={"center"}
              alignItems={"center"}
              height={"25rem"}
              display={"flex"}
              boxShadow={"lg"}
              gap={"1.5rem"}
              flexDir={"column"}
              background={"white"}
              borderRadius={".5rem"}
            >
              <Box width={"5rem"}>
                <Image src={icon} alt="icon" />
              </Box>
              <Text textAlign={"center"} fontSize={"1.65rem"} fontWeight={700}>
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
