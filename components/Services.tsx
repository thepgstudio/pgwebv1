import { Box, Text, effect } from "@chakra-ui/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
  EffectCoverflow,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

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
    <Box px="2rem" id="services" fontFamily={"poppins"}>
      <Text
        textAlign={"center"}
        my={"2rem"}
        fontFamily={"poppins"}
        fontSize={"2.5rem"}
        fontWeight={300}
      >
        WHAT WE DO?
      </Text>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCoverflow,
          Thumbs,
        ]}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
        }}
        effect="coverflow"
        grabCursor={true}
        pagination={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              height={"28rem"}
              display={"flex"}
              flexDir={"column"}
              background={"white"}
              // borderTopLeftRadius={"3rem"}
              // borderX={"2px solid black"}
              alignItems={"center"}
              justifyContent={"center"}
              gap="1.5rem"
            >
              <Text fontSize={"2rem"} color={"black"} fontWeight={700}>
                {item[0]}
              </Text>
              <Text textAlign={"center"} px="2rem">
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
