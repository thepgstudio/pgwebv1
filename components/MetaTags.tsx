import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <title>PGStudio</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta
        property="description"
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
        content="https://res.cloudinary.com/djskbsz2k/image/upload/v1704754390/GALLERY/PGStudio_-_Website_Link_Preview_tqlvy3.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="thepgstudio.com" />
      <meta property="twitter:url" content="https://thepgstudio.com" />
      <meta property="twitter:title" content="PGStudio" />
      <meta
        property="twitter:description"
        content="3d Architectural Rendering and Visualization Studio"
      />

      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/djskbsz2k/image/upload/v1704754390/GALLERY/PGStudio_-_Website_Link_Preview_tqlvy3.jpg"
      />
      <link rel="icon" href="/pgfavicon.png" />
    </Head>
  );
};

export default MetaTags;
