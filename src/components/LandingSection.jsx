import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ethanIcon from "../images/ethan-dog.png"

const greeting = "Hello, I am Ethan!";
const bio1 = "A frontend developer";
const bio2 = "This is my React Tutorial !!!";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size='xl' name='Pete' src={ethanIcon} />
      <Heading as='h4' size='xl'>{greeting}</Heading>
      <Heading as='h2' size='lg'>{bio1}</Heading>
      <Heading as='h3' size='md'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
