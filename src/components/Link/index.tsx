import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  IconProps,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { getCTALink, Info } from "data/links";
import { MouseEventHandler, RefObject, useRef, useState } from "react";
import { icons } from "react-icons/lib";

interface LinkPageProps {
  icon?: ButtonProps["leftIcon"];
  link: keyof typeof Info;
  text?: string;
  square?: boolean;
  copiable?: boolean;
}

const LinkPage: React.FC<LinkPageProps> = ({
  icon,
  link,
  text,
  square,
  copiable = true,
}) => {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const linkParsed = ["PHONE", "EMAIL"].includes(link)
    ? getCTALink(link)
    : Info[link];

  type Handler = MouseEventHandler<HTMLButtonElement>;

  const copyToClipboard: Handler = async (event) => {
    event.preventDefault();

    await navigator.clipboard.writeText(linkParsed);

    toast({ status: "success", title: "Link copiado!" });
    setCopied(true);
  };

  const defaultProps = {
    as: "a",
    onContextMenu: copyToClipboard,
    href: linkParsed,
    target: "_blank",
    colorScheme: "gray",
    rounded: square ? "0" : "full",
  };

  return (
    <Tooltip
      isDisabled={!copiable}
      label={copied ? "Copiado!" : "Clique com o botão direito para copiar"}
    >
      {text ? (
        <Button {...(defaultProps as ButtonProps)} leftIcon={icon}>
          {text}
        </Button>
      ) : (
        <IconButton
          {...(defaultProps as unknown as IconButtonProps)}
          aria-label={link}
          icon={icon}
        />
      )}
    </Tooltip>
  );
};

export default LinkPage;
