import {
  Box,
  Button,
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
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const MotionBox = motion(Box);
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      minH={{ base: "auto", md: "100vh" }}
    >
      <Box pb={4}>
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          overflow="hidden"
        >
          <Heading size="xl">Hi, my name is </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: 200 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
          overflow="hidden"
        >
          <Heading
            bgGradient=" linear-gradient(to right, #4EC9B0 0%, #4FB9FE 100%)"
            bgClip="text"
            size="2xl"
            mb="4"
          >
            Sebastian &apos;Patrici&apos; Kilian Gil
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.7 },
          }}
          overflow="hidden"
        >
          <Text fontSize={"2xl"} mb="4">
            I am a self-taught Front-End Developer based in Hamburg/Germany
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, x: 100 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.9 },
          }}
        >
          <Stack direction={"row"} spacing={4}>
            <a
              href="mailto:sebastian.patrici@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Hire Me!</Button>
            </a>
            <a
              href="https://github.com/patricijo"
              target="_blank"
              rel="noreferrer"
            >
              <Button>View Github!</Button>
            </a>
          </Stack>
        </MotionBox>
      </Box>
    </Flex>
  );
};

export default About;
