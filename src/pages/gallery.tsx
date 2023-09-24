import {
  Box,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import ExteriorTab from "../../components/GalleryTabs/ExteriorTab";
import InteriorTab from "../../components/GalleryTabs/InteriorTab";

const gallery = () => {
  return (
    <Box
      fontFamily={"poppins"}
      mt={{ base: "10rem", lg: "17rem" }}
      mb={{ base: "5rem", lg: "7rem" }}
    >
      <HStack
        pl={{ base: "1rem", lg: "2rem" }}
        pr={{ base: "1rem", lg: "2rem" }}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              fontSize={{ base: "1rem", lg: "1.35rem" }}
              fontWeight={300}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              fontSize={{ base: "1rem", lg: "1.35rem" }}
              color={"#BABABA"}
              fontWeight={200}
              href="#"
            >
              Gallery
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>

      <HStack
        flexDir={{ base: "column", lg: "row" }}
        pl={{ base: "1rem", lg: "2rem" }}
        pr={{ base: "1rem", lg: "2rem" }}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        display={"flex"}
        gap={"2rem"}
        mt={"2rem"}
      >
        <Text
          fontSize={{ base: "1.2rem", lg: "1.75rem" }}
          w={{ base: "100%", lg: "40%" }}
          fontWeight={400}
        >
          IMMERSIVE ARCHITECTURAL VISUALIZATION PORTFOLIO: CRAFTING A COMPELLING
          NON-EXISTENT REALITY.
        </Text>

        <Text
          fontSize={{ base: "1.15rem", lg: "1.75rem" }}
          w={{ base: "100%", lg: "55%" }}
          textTransform={"uppercase"}
          ml={"0rem !important"}
          fontWeight={200}
        >
          Throughout our journey, we&apos;ve amassed the expertise and ability
          to bring our clients&apos; design concepts to life, while also pushing
          the boundaries of architectural visualizations.
        </Text>
      </HStack>

      <Box mt={{ base: "2rem", lg: "5rem" }}>
        <Tabs isLazy position="relative" variant="unstyled">
          <TabList
            justifyContent={{ base: "space-between", lg: "flex-start" }}
            gap={{ base: "0rem", lg: "1.5rem" }}
            pl={{ base: "1rem", lg: "1rem" }}
            pr={{ base: "1rem", lg: "2rem" }}
          >
            {[  "INTERIOR","EXTERIOR", "LIGHTING", "MODELS", "ANIMATION/VR"].map(
              (item, index) => (
                <Tab
                  fontSize={{ base: ".9rem", lg: "1.5rem" }}
                  fontWeight={200}
                  key={index}
                  p={"0rem"}
                >
                  {item}
                </Tab>
              )
            )}
          </TabList>
          <TabIndicator
            borderRadius={"1px"}
            w={"max-content"}
            height={"1px"}
            mt={"-1.5px"}
            bg={"black"}
          />
          <TabPanels>
            <TabPanel>
              <InteriorTab/>
            </TabPanel>
            <TabPanel>
              <ExteriorTab />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default gallery;
