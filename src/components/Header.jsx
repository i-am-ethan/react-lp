import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

function scrollToSection(e, sectionId) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });  
}

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollPosRef = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(()=>{
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const direction = currentScrollPos > prevScrollPosRef.current ? "down" : "up";

      setScrollPos(currentScrollPos);

      if (direction === "down" && showHeader) {
        setShowHeader(false);
      } else if (direction === "up" && !showHeader) {
        setShowHeader(true);
      }
      prevScrollPosRef.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader])


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={`translateY(${showHeader ? "0" : "-100%"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {
                socials.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={(e)=>{scrollToSection(e, "projects-section")}}>Projects</a>
              <a href="#contactme-section" onClick={(e)=>{scrollToSection(e, "contactme-section")}}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
