import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      <VStack bg="white" borderRadius="md" alignItems="start" cursor="pointer">
        <Image borderRadius="md" src={imageSrc} alt={title} />
        <Box pl={4} pr={4} pb={4}>
          <Heading color="black" as='h4' size='md' mt={2} mb={2}>{title}</Heading>
          <Text color="gray" fontSize='sm' mt={2} mb={2}>{description}</Text>
          <HStack>
            <Text color="black" fontSize='sm'>See more</Text>
            <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default Card;
