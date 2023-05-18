import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PGStudio Web</title>
        <meta name="description" content="PGStudio" />
        <meta name="description" content="A Design Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        px="3rem"
        mt="10rem"
        pt="7rem"
        height="130vh"
        fontFamily={"poppins"}
      >
        <Text fontWeight={500} width={"38%"} fontSize={"2.2rem"}>
          3d Architectural Rendering and <br />
          Visualization Studio
        </Text>

        <Text w="54%" fontWeight={200} fontSize={"2.2rem"} pr="2rem">
          Producing images that you want to be in, we’re creating a powerful
          non-existent reality. 3D rendering for architects, developers,
          branding agencies and product design companies.
        </Text>
      </Box>
    </>
  );
}
