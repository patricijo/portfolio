import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Skills = {
  Languages: ["Javascript", "HTML", "CSS", "Solidity", "PHP"],
  Frameworks: ["ReactJS", "React Native", "nextJS", "SASS", "jQuery"],
  Libraries: ["Chakra UI", "Redux(toolkit)", "React Router", "Framer Motion"],
  Backend: ["Moralis", "Firebase", "MongoDB"],
};

Skills;

const About = () => {
  return (
    <Box minH={"100vh"} align="stretch">
      <HStack h="100vh">
        <Center h="100vh" w="30vw">
          <Box>
            <Image
              objectFit={"cover"}
              src="/me.png"
              overflow="hidden"
              h={"80vh"}
              alt="me"
            ></Image>
            <Image
              objectFit={"cover"}
              src="/cardboard.png"
              mt="-40vh"
              h={"40vh"}
              alt="cardboard"
            ></Image>
          </Box>
        </Center>

        <Box w="70vw">
          <Box>
            <Text fontSize={"2xl"}>Hi, my name is </Text>
            <Heading
              bgGradient=" linear-gradient(to right, #4EC9B0 0%, #4FB9FE 100%)"
              bgClip="text"
              size="2xl"
              mb="4"
            >
              Sebastian &apos;Patrici&apos; Kilian Gil
            </Heading>
            <Text fontSize={"2xl"}>
              I am a self-taught Front-End Developer <br />
              based in Hamburg/Germany
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default About;
