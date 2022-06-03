import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const PictureOfMe = () => {
  const MotionBox = motion(Box);
  return (
    <Center
      pos={"relative"}
      w={"380px"}
      h="400px"
      maxW={"95vw"}
      maxH={"calc(100vw*1.1)"}
    >
      <MotionBox
        initial={{ y: 180, opacity: 1, height: 1 }}
        animate={{
          y: 0,
          height: "100%",
          opacity: 1,
          transition: { duration: 1, delay: 1.3 },
        }}
        maxW={"70vw"}
        w={{ base: "300px" }}
        overflow="hidden"
      >
        <Image objectFit={"contain"} src="/me2.png" alt="me"></Image>
      </MotionBox>

      <MotionBox
        initial={{ y: -160, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        }}
        pos={"absolute"}
        bottom={0}
        left={0}
        w={{ base: "360px" }}
        maxW={"90vw"}
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
        >
          <Image
            objectFit={"contain"}
            src="/cardboard.png"
            alt="cardboard"
          ></Image>
        </MotionBox>
      </MotionBox>
    </Center>
  );
};

export default PictureOfMe;
