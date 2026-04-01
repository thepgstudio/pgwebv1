import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Head from "next/head";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      body: `At PGStudio, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our 3D architectural rendering and visualization services.

Please read this policy carefully. If you disagree with its terms, please discontinue use of our website and services. By continuing to use our site or engaging with us, you consent to the practices described in this policy.`,
    },
    {
      title: "2. Information We Collect",
      body: `We may collect personal information that you voluntarily provide to us when you contact us through our website, submit a project enquiry, or engage our services. This may include your name, email address, phone number, company name, and details relating to your project or architectural requirements.

We also collect certain information automatically when you visit our website, including your IP address, browser type and version, the pages you visit, the time and date of your visit, and other diagnostic data. This information helps us understand how our website is used and how we can improve your experience.

We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, please contact us immediately so we can take appropriate steps to remove it.`,
    },
    {
      title: "3. How We Use Your Information",
      body: `PGStudio uses the information we collect for the following purposes:

To provide, operate, and maintain our services and respond to your enquiries and project requests. To communicate with you regarding your projects, quotations, invoices, and any updates relevant to your engagement with us. To improve, personalise, and expand our website and service offerings based on user behaviour and feedback. To send you marketing and promotional communications where you have opted in to receive them — you may opt out at any time. To comply with legal obligations and to protect the rights and interests of PGStudio and our clients.

We will never sell your personal information to third parties, and we will only share it in the circumstances described in this policy.`,
    },
    {
      title: "4. Sharing of Information",
      body: `Mobile information, including text messaging originator opt-in data and consent, will not be shared with any third parties or affiliates for marketing/promotional purposes, as further detailed in Section 5.`,
    },
    {
      title: "5. SMS Consent and Messaging",
      body: `When you provide your phone number and consent to receive SMS messages from PGStudio, your consent and phone number will never be shared with third parties for their own marketing or promotional purposes. The only exception is our authorised SMS service providers who facilitate the delivery of messages on our behalf. These providers are bound by strict confidentiality and data protection obligations and are permitted to process your information solely for the purpose of message delivery.

Your decision to opt in or opt out of SMS communications has no bearing on your ability to use our services or receive other forms of support. You may withdraw your consent at any time by replying STOP to any message you receive from us.`,
    },
    {
      title: "6. Data Retention",
      body: `PGStudio retains your personal information for as long as is necessary to fulfil the purposes outlined in this policy, including for the duration of any ongoing business relationship and for a reasonable period thereafter to comply with our legal obligations, resolve disputes, and enforce our agreements.

When your information is no longer required, we will take reasonable steps to securely delete or anonymise it.`,
    },
    {
      title: "7. Data Security",
      body: `We take the security of your personal information seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction. These measures include secure servers, encrypted communications where applicable, and restricted access to personal data within our team.

However, no method of data transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security and encourage you to take reasonable precautions when sharing sensitive information online.`,
    },
    {
      title: "8. Cookies",
      body: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and gather analytical data about site usage. Cookies are small text files placed on your device that help us remember your preferences and understand how visitors interact with our site.

You can control the use of cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. By continuing to use our website, you consent to our use of cookies in accordance with this policy.`,
    },
    {
      title: "9. Third-Party Links",
      body: `Our website may contain links to third-party websites, including social media platforms such as Facebook, Instagram, LinkedIn, and X (formerly Twitter). This Privacy Policy applies only to our website and services. We are not responsible for the privacy practices or content of any third-party sites, and we encourage you to review the privacy policies of any external sites you visit.`,
    },
    {
      title: "10. Your Rights",
      body: `Depending on your location, you may have certain rights regarding your personal information, including the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your personal data, object to or restrict certain types of processing, and withdraw consent where processing is based on consent.

To exercise any of these rights, please contact us using the details below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.`,
    },
    {
      title: "11. Changes to This Policy",
      body: `PGStudio reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.

Your continued use of our website or services following the posting of changes constitutes your acceptance of the revised policy.`,
    },
    {
      title: "12. Contact Us",
      body: `If you have any questions, concerns, or requests relating to this Privacy Policy or the way we handle your personal information, please reach out to us through our website contact form or via our official social media channels. We are committed to addressing your concerns in a transparent and timely manner.

PGStudio values your trust and is dedicated to handling your personal information with care, integrity, and respect.`,
    },
  ];

  return (
    <>
      <Head>
        <title>PGStudio | Privacy Policy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          property="description"
          content="Privacy Policy — PGStudio 3D Architectural Rendering and Visualization Studio"
        />
      </Head>

      <Box
        fontFamily={"poppins"}
        mt={{ base: "10rem", lg: "17rem" }}
        mb={{ base: "3rem", lg: "10rem" }}
        px={{ base: "1rem", lg: "2rem" }}
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
              Privacy Policy
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box mt={"2rem"} borderBottom={"1px solid #f0f0f0"} pb={"2rem"} textAlign={"center"}>
          <Text
            fontSize={{ base: "1.75rem", lg: "2.5rem" }}
            fontWeight={500}
            textTransform={"uppercase"}
            letterSpacing={".05rem"}
          >
            Privacy Policy
          </Text>
          <Text
            fontSize={{ base: ".9rem", lg: "1rem" }}
            fontWeight={300}
            color={"#bababa"}
            mt={".5rem"}
          >
            Last updated: {new Date().toLocaleString("default", { month: "long" })}, {new Date().getFullYear()}
          </Text>
        </Box>

        <Box mt={"3rem"} maxW={"860px"} mx={"auto"}>
          {sections.map((section, index) => (
            <Box key={index} mb={"2.5rem"} textAlign={"center"}>
              <Text
                fontSize={{ base: "1rem", lg: "1.15rem" }}
                fontWeight={600}
                textTransform={"uppercase"}
                letterSpacing={".04rem"}
                mb={".75rem"}
              >
                {section.title}
              </Text>
              {section.body.split("\n\n").map((paragraph, i) => (
                <Text
                  key={i}
                  fontSize={{ base: ".9rem", lg: "1rem" }}
                  fontWeight={300}
                  lineHeight={"1.85"}
                  color={"#222"}
                  mb={".75rem"}
                >
                  {paragraph}
                </Text>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
