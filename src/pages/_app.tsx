import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../../components/layout";
import dynamic from "next/dynamic";


const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export function reportWebVitals(metric: any){
  console.log(metric)
}
export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    let theme = localStorage.getItem("theme") || "light";
    setTheme(theme);
  }, []);

  if (!theme) {
    return;
  }

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}
