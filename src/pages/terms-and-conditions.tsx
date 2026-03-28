import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Head from "next/head";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Introduction",
      body: `Welcome to PGStudio. These Terms and Conditions govern your use of our website and the professional 3D architectural rendering and visualization services we provide. By engaging with our services or accessing our website, you agree to be bound by these terms. Please read them carefully before proceeding.

PGStudio is a 3D Architectural Rendering and Visualization Studio dedicated to delivering photorealistic imagery, architectural animations, 360 virtual tours, and 3D modeling solutions to architects, interior designers, developers, branding agencies, and product design firms worldwide.`,
    },
    {
      title: "2. Acceptance of Terms",
      body: `By placing an order, submitting a project brief, or using any of our services, you confirm that you have read, understood, and agree to comply with these Terms and Conditions in full. If you do not agree with any part of these terms, you must not engage our services.

These terms apply to all clients, visitors, and users who access or use the services offered by PGStudio. We reserve the right to update or modify these terms at any time, and continued use of our services following any changes constitutes acceptance of the revised terms.`,
    },
    {
      title: "3. Services",
      body: `PGStudio provides a range of 3D visualization and rendering services, including but not limited to: Architectural Visualization, Residential and Commercial Renderings, Exterior and Interior 3D Visualizations, Real Estate Rendering, Virtual Staging, Architectural Animation, 360 Walkthroughs and Virtual Tours, 3D Product Visualization, Furniture Rendering, and Architectural 3D Modeling.

All services are delivered based on the project brief, drawings, references, and specifications provided by the client. The quality and accuracy of our output is directly dependent on the completeness and clarity of the materials you provide. PGStudio will make reasonable efforts to interpret incomplete or ambiguous briefs, but does not accept liability for results that deviate from an unclear specification.`,
    },
    {
      title: "4. Intellectual Property",
      body: `All original creative work, renders, animations, models, and visual content produced by PGStudio remains the intellectual property of PGStudio until full and final payment has been received. Upon receipt of payment in full, the client is granted a non-exclusive, perpetual licence to use the delivered assets for the purposes specified in the project brief.

PGStudio reserves the right to display completed work in its portfolio, on its website, and across social media platforms for promotional and marketing purposes, unless the client has expressly requested confidentiality in writing prior to project commencement.

The client warrants that any drawings, references, images, or other materials provided to PGStudio do not infringe upon the intellectual property rights of any third party. The client shall indemnify PGStudio against any claims arising from such infringement.`,
    },
    {
      title: "5. Payment Terms",
      body: `Payment terms are agreed upon at the commencement of each project and outlined in the project proposal. Typically, PGStudio requires a deposit before work begins, with the balance due upon delivery of final assets. Specific payment milestones may be agreed upon for larger projects.

All fees are quoted in the currency specified in the project proposal. Invoices are due for payment within the period stated on the invoice. Late payments may incur additional charges or result in suspension of work until outstanding amounts are cleared.

PGStudio reserves the right to withhold delivery of final assets until all outstanding payments have been received in full.`,
    },
    {
      title: "6. Revisions and Amendments",
      body: `Each project proposal will specify the number of revision rounds included in the quoted price. Revisions that fall within the agreed scope will be accommodated at no additional charge. Requests for changes that go beyond the agreed revision rounds, or that alter the original brief significantly, will be quoted as additional work.

PGStudio will make every effort to accommodate reasonable revision requests in a timely manner. However, extensive scope changes may affect project timelines, and PGStudio will communicate any resulting delays promptly.`,
    },
    {
      title: "7. Confidentiality",
      body: `PGStudio understands that architectural projects often involve sensitive or commercially confidential information. Upon written request, PGStudio will treat project materials and deliverables as confidential and will not disclose them to third parties or use them for portfolio display without the client's prior written consent.

Clients who require a Non-Disclosure Agreement (NDA) should communicate this requirement before the project commences, and PGStudio will review and sign appropriate agreements on a case-by-case basis.`,
    },
    {
      title: "8. Limitation of Liability",
      body: `PGStudio's liability in connection with any project or service is limited to the total fees paid by the client for that specific project. PGStudio shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of our services or deliverables, including but not limited to loss of profits, loss of contracts, or loss of business opportunities.

PGStudio does not guarantee that visualizations will exactly replicate the appearance of constructed buildings or manufactured products, as physical materials, lighting conditions, and construction tolerances may vary.`,
    },
    {
      title: "9. SMS Messaging Consent",
      body: `When you provide your phone number via our contact form and opt in to receive SMS messages, PGStudio may send you transactional messages (such as project updates, appointment confirmations, and responses to your enquiries) and, where separately consented to, marketing and promotional messages.

Your SMS consent information, including your phone number and opt-in status, will never be sold, rented, or shared with third parties for their own marketing purposes. The sole exception is our authorised SMS service providers who are engaged strictly to facilitate message delivery on our behalf. These providers are contractually bound to maintain the confidentiality of your data and may not use it for any other purpose.

You may opt out of SMS communications at any time by replying STOP to any message. For assistance, reply HELP. Message frequency may vary. Standard message and data rates may apply.`,
    },
    {
      title: "10. Governing Law",
      body: `These Terms and Conditions are governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the relevant courts. PGStudio will always endeavour to resolve disputes amicably and in good faith before pursuing formal legal remedies.`,
    },
    {
      title: "11. Contact",
      body: `If you have any questions about these Terms and Conditions, or wish to discuss any aspect of our services or a specific project, please do not hesitate to get in touch with us. You can reach PGStudio through our website contact form or via our official social media channels. We welcome all enquiries and are committed to responding promptly and professionally.`,
    },
  ];

  return (
    <>
      <Head>
        <title>PGStudio | Terms and Conditions</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          property="description"
          content="Terms and Conditions — PGStudio 3D Architectural Rendering and Visualization Studio"
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
              Terms and Conditions
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
            Terms and Conditions
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

export default TermsAndConditions;
