import { ReactElement } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

type LinkData = {
  link: keyof typeof Info;
  icon: ReactElement;
  label: string;
};

export const Info = {
  LINKEDIN: "https://www.linkedin.com/in/arthur-mendes-pereira-9b5843204/",
  GITHUB: "https://github.com/Thumendes",
  INSTAGRAM: "https://www.instagram.com/thumendess",
  EMAIL: "thumendess@gmail.com",
  PHONE: "+55 (31) 9 98473-6688",
};

export const IconsData: LinkData[] = [
  { link: "PHONE", label: "Celular", icon: <FiPhone /> },
  { link: "EMAIL", label: "E-mail", icon: <FiMail /> },
  { link: "LINKEDIN", label: "Linkedin", icon: <SiLinkedin /> },
  { link: "GITHUB", label: "Github", icon: <SiGithub /> },
  { link: "INSTAGRAM", label: "Instagram", icon: <SiInstagram /> },
];

export const getCTALink = (link: keyof typeof Info) => {
  switch (link) {
    case "EMAIL":
      return `mailto:${Info.EMAIL}`;
    case "PHONE":
      return `tel:${Info.PHONE}`;
    default:
      return "";
  }
};
