import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const References = () => {
  const MotionBox = motion(Center);
  return (
    <>
      <MotionBox
        /*       initial={{ height: "auto" }}
      animate={{
        height: "100vh",
        transition: { duration: 0.5 },
      }} */
        minH={{ base: "auto,", md: "100vh" }}
      >
        <Box w="full">
          <Heading
            bgGradient=" linear-gradient(to right, #4EC9B0 0%, #4FB9FE 100%)"
            bgClip="text"
            size="2xl"
            mb="4"
          >
            Some of my work
          </Heading>
          <Box
            my={4}
            p={4}
            borderRadius={"lg"}
            w="full"
            bg={"rgba(30,30,30,1)"}
            pos={"relative"}
          >
            <Heading size={"md"} mb={4}>
              Mint your NFT
            </Heading>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Image
                objectFit={"contain"}
                src="/mintnft.png"
                alt="Mint your NFT"
                w={{ base: "100%", sm: 200 }}
                borderRadius={"lg"}
              ></Image>
              <Stack>
                <Text>
                  A NFT minter Website to mint custom NFTS. The minter supports
                  multiple chains like Ethereum, Polygon and more.
                </Text>
                <Spacer />
                <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
                  <Spacer />
                  <a
                    href="https://github.com/patricijo/nftminter"
                    target="_blank"
                    rel="noreferrer"
                    w="full"
                  >
                    <Button w="full">View on Github</Button>
                  </a>
                  <a
                    href="https://mute-credit-4811.on.fleek.co/"
                    target="_blank"
                    rel="noreferrer"
                    w="full"
                  >
                    <Button w="full">Visit Website</Button>
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          <Box
            my={4}
            p={4}
            borderRadius={"lg"}
            w="full"
            bg={"rgba(30,30,30,1)"}
            pos={"relative"}
          >
            <Heading size={"md"} mb={4}>
              Netflix Trailer Browser Extension
            </Heading>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Image
                objectFit={"contain"}
                src="/netflixtrailers.png"
                alt="Netflix Trailers"
                w={{ base: "100%", sm: 200 }}
                borderRadius={"lg"}
              ></Image>
              <Stack>
                <Text>
                  This Chrome Browser Extension adds a trailer button to
                  Netflix.
                </Text>
                <Spacer />
                <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
                  <Spacer />
                  <a
                    href="https://github.com/patricijo/NetflixTrailerAddOn"
                    target="_blank"
                    rel="noreferrer"
                    w="full"
                  >
                    <Button w="full">View on Github</Button>
                  </a>
                  <a
                    href="https://chrome.google.com/webstore/detail/netflix-trailers/bpcpnpgoonfokdeijmknlnmpnckfpiac?hl=de"
                    target="_blank"
                    rel="noreferrer"
                    w="full"
                  >
                    <Button w="full">Visit Chrome Store</Button>
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </MotionBox>
    </>
  );
};

export default References;
