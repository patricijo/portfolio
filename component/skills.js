import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Skills = () => {
  const MotionBox = motion(Center);
  return (
    <MotionBox
      /*       initial={{ height: "auto" }}
      animate={{
        height: "100vh",
        transition: { duration: 0.5 },
      }} */
      minH={{ base: "auto,", md: "100vh" }}
    >
      <Box
        borderRadius={"lg"}
        w="full"
        bg={"rgba(30,30,30,1)"}
        pos={"relative"}
        overflow="hidden"
      >
        <Flex w="full" bg="#333" p={1}>
          <Flex pos={"absolute"}>
            <Box m={1} mt={2} w={2} h={2} borderRadius="full" bg="#fff"></Box>
            <Box m={1} mt={2} w={2} h={2} borderRadius="full" bg="#fff"></Box>
            <Box m={1} mt={2} w={2} h={2} borderRadius="full" bg="#fff"></Box>
          </Flex>
          <Center w="full">Skills.js</Center>
        </Flex>

        <Box p={4}>
          <div className="cm-line">
            <span className="lb">const</span> <span className="lg">Skills</span>{" "}
            = <span className="lk">{"{"}</span>
          </div>
          <div className="cm-line">
            {" "}
            <div className="ll">Languages: </div>{" "}
            <Flex>
              <Box>
                <span className="la">[ </span>
                <span className="le">&quot;Javascript&quot;</span>,{" "}
                <span className="le">&quot;HTML&quot;</span>,{" "}
                <span className="le">&quot;CSS&quot;</span>,{" "}
                <span className="le">&quot;Solidity&quot;</span>,{" "}
                <span className="la"> ]</span>,{" "}
              </Box>
            </Flex>
          </div>
          <div className="cm-line">
            {" "}
            <div className="ll">Frameworks: </div>{" "}
            <Flex>
              <Box>
                <span className="la">[ </span>
                <span className="le">&quot;ReactJS&quot;</span>,{" "}
                <span className="le">&quot;React Native&quot;</span>,{" "}
                <span className="le">&quot;nextJS&quot;</span>,{" "}
                <span className="le">&quot;SASS&quot;</span>,{" "}
                <span className="la"> ]</span>,{" "}
              </Box>
            </Flex>
          </div>
          <div className="cm-line">
            {" "}
            <div className="ll">Libraries: </div>
            <Flex>
              <Box>
                <span className="la">[ </span>
                <span className="le">&quot;Redux(toolkit)&quot;</span>,{" "}
                <span className="le">&quot;React Router&quot;</span>,{" "}
                <span className="le">&quot;Chakra UI&quot;</span>,{" "}
                <span className="le">&quot;Framer-Motion&quot;</span>
                <span className="la"> ]</span>,
              </Box>
            </Flex>
          </div>
          <div className="cm-line">
            {" "}
            <div className="ll">Backend: </div>{" "}
            <Flex>
              <Box>
                <span className="la">[ </span>
                <span className="le">&quot;Moralis&quot;</span>,{" "}
                <span className="le">&quot;Firebase&quot;</span>,{" "}
                <span className="le">&quot;Express.js&quot;</span>,{" "}
                <span className="le">&quot;MongoDB&quot;</span>
                <span className="la"> ]</span>,
              </Box>
            </Flex>
          </div>
          <div className="cm-line">
            <span className="lk">{"} "}</span>;
          </div>
          <a href="#refs">
            <Button pos={"absolute"} right={2} bottom={2}>
              npm run skills.js
            </Button>
          </a>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default Skills;
