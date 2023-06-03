import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import image_one from "../../public/assets/images/image_one.jpg";
import image_two from "../../public/assets/main/MAIN Image.png";

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
        <Box w={"100%"} margin={"auto"}>
          <Image src={image_two} alt="image_one" />
        </Box>
        {/* <Box w={"50%"}>
          <Box pl="2rem" fontFamily={"poppins"} pb="3rem">
            <Text fontWeight={700} fontSize={"1.25rem"}>
              OFFICE CENTER
            </Text>
            <Text fontSize={"1.25rem"} fontWeight={200}>
              CLIENT: GENSLER
            </Text>
            <Text fontSize={"1.25rem"} fontWeight={200}>
              LOCATION: SOUTH KOREA
            </Text>
          </Box>
          <Image src={image_two} alt="image_two" />
        </Box> */}
      </Box>
    </>
  );
}
