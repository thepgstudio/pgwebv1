import { StaticImageData } from "next/image";
import desola from "../public/assets/team/Miss. Ganiyu Faith (B&W).jpg";
import broini from "../public/assets/team/Mr. Adediran Inioluwa (B&W).jpg";
import okuro from "../public/assets/team/Mr. Okuro Samson (B&W).jpg";
import sisi from "../public/assets/team/Miss. Adediran Iyanuoluwa (B&W).jpg";
import dlaw from "../public/assets/team/Mr. Atanda Ayomide - 1 (B&W).jpg";
import drem from "../public/assets/team/Mr. Aderemi Adedapo (B&W).jpg";
import ben from "../public/assets/team/Mr. Areo Benjamen - 2 (B&W).jpg";
import pg from "../public/assets/team/PG.jpg";

import logo1 from "../public/assets/PARTNERS/1.png";
import logo2 from "../public/assets/PARTNERS/2.png";
import logo3 from "../public/assets/PARTNERS/3.png";
import logo4 from "../public/assets/PARTNERS/4.png";
import logo5 from "../public/assets/PARTNERS/5.png";
import logo6 from "../public/assets/PARTNERS/6.png";
import logo7 from "../public/assets/PARTNERS/7.png";
import logo8 from "../public/assets/PARTNERS/8.png";

const patners: StaticImageData[] = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
];

const asset: (string | StaticImageData)[][] = [
  [
    pg,
    "ADEDIRAN ILERIOLUWA",
    "FOUNDER/CEO",
    "This team of imaginative experts dedicated to turning ideas into captivating realities is led by Ilerioluwa. Being a visionary and innovative leader, our process is driven by ultra-modern technologies, creating immersive visual experiences that redefine architectural possibilities.",
  ],
  [
    broini,
    "ADEDIRAN INIOLUWA",
    "CHIEF OPERATING OFFICER",
    "Inioluwa is a diligent leader who effortlessly balances creativity and efficiency. With a keen eye for detail and a passion for delivering exceptional visual experiences, he drives operational excellence while fostering a collaborative and innovative work environment.",
  ],
  [
    okuro,
    "SAMSON OKURO",
    "CHIEF MARKETING OFFICER",
    "He exudes a harmonious blend of creative vision and strategic acumen, leveraging his profound appreciation for architectural aesthetics to curate compelling narratives that resonate with clients. With Sam’s innate ability to fuse design innovation with market insights, he orchestrates campaigns that not only showcase the company's visual prowess but also cultivate meaningful connections within the design and architecture communities.",
  ],
  [
    ben,
    "AREO BENJAMIN",
    "CHIEF TECHNICAL OFFICER",
    "Ben embodies a unique fusion of technical prowess and creative flair, seamlessly navigating the realms of architectural design and visualization with innovative coding solutions. His analytical mindset fuels precision in crafting immersive digital experiences, while his collaborative spirit thrives in a design-centric environment, making him an indispensable asset to our creative agency.",
  ],
  [
    drem,
    "ADEREMI ADEDAPO",
    "PHOTOGRPAHY DIRECTOR",
    "With a discerning eye for detail and a deep appreciation for design aesthetics, Drem directs the play of light, angles, and composition, breathing life into architectural creations with a perfect blend of creativity and precision. He puts effort into making each shot encapsulate the essence of the company's architectural vision.",
  ],
  [
    sisi,
    "ADEDIRAN IYANUOLUWA",
    "HUMAN RESOURCE SPECIALIST",
    "Our HR Specialist is adept at balancing the creative needs of the designers with the practical requirements of the business, fostering a harmonious and innovative work environment. Iyanu's empathetic nature and organizational finesse create a seamless bridge between artistic expression and operational efficiency.",
  ],
  [
    desola,
    "GANIYU FAITH",
    "DIGITAL MARKETING OFFICER",
    "Faith is a strategic and creative thinker with a keen eye for aesthetics. Working with the Chief Marketing Officer, she blends her analytical prowess with artistic sensibilities to craft compelling campaigns that beautifully showcase the firm's innovative designs while strategically targeting the right audiences.",
  ],
  [
    dlaw,
    "ATANDA AYOMIDE",
    "COPYWRITER/LEGAL OFFICER",
    "With excellence in balancing roles, he is a versatile professional who navigates the intricacies of legal matters with precision while also crafting engaging and insightful content that translates complex design concepts into accessible narratives. Ayo offers a unique perspective that bridges the gap between legal compliance and captivating storytelling in the world of architectural innovation.",
  ],
];

export {asset, patners};
