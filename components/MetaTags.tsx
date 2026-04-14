import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <title>PGStudio</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta
        name="description"
        content="3d Architectural Rendering and Visualization Studio"
      />

      <meta property="og:title" content="PGStudio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thepgstudio.com" />
      <meta property="og:site_name" content="PGStudio" />
      <meta
        property="og:description"
        content="3d Architectural Rendering and Visualization Studio"
      />

      <meta
        property="og:image"
        content="https://thepgstudio.com/opengraph-image.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="thepgstudio.com" />
      <meta name="twitter:url" content="https://thepgstudio.com" />
      <meta name="twitter:title" content="PGStudio" />
      <meta
        name="twitter:description"
        content="3d Architectural Rendering and Visualization Studio"
      />

      <meta
        name="twitter:image"
        content="https://thepgstudio.com/opengraph-image.jpg"
      />
      <link rel="icon" href="/pgfavicon.png" />
    </Head>
  );
};

export default MetaTags;
