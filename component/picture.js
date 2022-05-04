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
import React from "react";
import { motion } from "framer-motion";

const PictureOfMe = () => {
  const MotionBox = motion(Box);
  return (
    <Box align={"center"} pos={"relative"}>
      <MotionBox
        initial={{ height: 0, opacity: 1 }}
        animate={{
          height: "auto",
          opacity: 1,

          transition: { duration: 1 },
        }}
        w={{ base: "8vw" }}
        overflow="hidden"
      >
        <Image objectFit={"contain"} src="/me.png" alt="me"></Image>
      </MotionBox>
      <MotionBox
        initial={{ height: 0, opacity: 1 }}
        animate={{
          height: "auto",
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <MotionBox
          animate={{
            x: "1%",
            y: "2%",
            rotate: -1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
            repeatType: "reverse",
          }}
          pos={"absolute"}
          bottom={"-10%"}
          left={"-10%"}
          w={{ base: "10vw" }}
        >
          <Image
            objectFit={"contain"}
            src="/cardboard.png"
            alt="cardboard"
          ></Image>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default PictureOfMe;
