import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack cursor='pointer'>
      <Box bg='white' borderRadius='xl'>
        <VStack>
          <Image src={imageSrc} borderRadius='xl' />
        </VStack>
        <VStack p="5" color='black' alignItems='flex-start'>
          <Heading as="h4" size="md" color="black">
            {title}
          </Heading>
          <Text color="#64748b" fontSize='lg' py='2'>{description}</Text>
          <Text color='black' fontSize='sm' >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Card;
