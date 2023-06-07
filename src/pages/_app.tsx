import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../../components/layout";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <AnimatedCursor
        innerSize={5}
        outerSize={50}
        color="0,0,0"
        outerAlpha={1}
        innerScale={0.5}
        outerScale={5}
        showSystemCursor={true}
        trailingSpeed={6}
        innerStyle={{ border: "1px solid #fff" }}
        outerStyle={{
          mixBlendMode: "luminosity",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}
