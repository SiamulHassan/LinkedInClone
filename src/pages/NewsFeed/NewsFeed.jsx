import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImgIcon from "../../svg/ImgIcon";
import SendIcon from "../../svg/SendIcon";
import DotsIcon from "../../svg/DotsIcon";
import profileImg from "../../assets/profile.png";
import feedImg from "../../assets/feed.png";
import NewsFeedProfile from "../../components/NewsFeedProfile/NewsFeedProfile";
import { SlLike } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsSend } from "react-icons/bs";
import { useState } from "react";
const NewsFeed = () => {
  const [show, setShow] = useState(false);
  const handleChatIconClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <Box bgColor={"#f7f9fb"} minH={"100vh"}>
        <Container maxW={"1320px"}>
          <Grid templateColumns={"2fr 1fr"} gap={"5rem"}>
            <GridItem>
              <Box
                className="post-box"
                bgColor={"#fff"}
                padding={"3rem"}
                borderRadius={"8px"}
                mt={"4rem"}
                mb={"3rem"}
              >
                <VStack
                  align={"left"}
                  divider={<StackDivider borderColor="gray.200" />}
                  gap={"1rem"}
                >
                  <Text fontSize={"1.4rem"} fontWeight={"600"}>
                    NEW POST
                  </Text>
                  <Flex>
                    <Input
                      variant="unstyled"
                      placeholder="What's on your mind?"
                      fontSize={"1.8rem"}
                      _placeholder={{ opacity: 0.4, color: "#181818" }}
                    />
                    <Flex className="submit" align={"center"} gap={4}>
                      <Box cursor={"pointer"}>
                        <ImgIcon />
                      </Box>
                      <Center
                        bgColor={"#0088cc"}
                        px={"1rem"}
                        py={"0.8rem"}
                        borderRadius={"5px"}
                        cursor={"pointer"}
                      >
                        <SendIcon />
                      </Center>
                    </Flex>
                  </Flex>
                </VStack>
              </Box>
              <Box
                className="post-feed"
                bgColor={"#fff"}
                padding={"3rem"}
                pt={"1rem"}
                borderRadius={"8px"}
                mt={"4rem"}
                mb={"3rem"}
                pos={"relative"}
              >
                <Flex
                  className="dots"
                  justify={"end"}
                  _after={{
                    content: "''",
                    pos: "absolute",
                    top: "4rem",
                    left: "0",
                    w: "100%",
                    h: "1px",
                    bgColor: "gray.200",
                  }}
                >
                  <DotsIcon />
                </Flex>
                <Box cl assName="feed-description" mt={"1.5rem"}>
                  <Flex gap={"2rem"} align={"center"}>
                    <Box
                      className="profile-part"
                      w={"5rem"}
                      h={"5rem"}
                      borderRadius={"50%"}
                      overflow={"hidden"}
                    >
                      <Image src={profileImg} alt="profile" />
                    </Box>
                    <Box>
                      <Heading as="h2" size="xl" fontSize={"1.8rem"}>
                        Kyle Fisher
                      </Heading>
                      <Text fontSize={"1.2rem"} lineHeight={"150%"}>
                        Product designer at Commandor Corp.
                      </Text>
                    </Box>
                  </Flex>
                  <Text my={"1.5rem"}>How’s your day going, guys?</Text>
                  <Image src={feedImg} alt="feed image" />
                </Box>
                <Box className="like-section" mt={"2rem"}>
                  <Flex gap={"1.5rem"}>
                    <SlLike cursor={"pointer"} />
                    <TfiCommentAlt
                      cursor={"pointer"}
                      onClick={handleChatIconClick}
                    />
                  </Flex>
                  {show && (
                    <Flex align={"center"}>
                      <Input
                        fontSize={"1.6rem"}
                        variant="flushed"
                        placeholder="write here ..."
                        mt={"1.4rem"}
                      />
                      <BsSend cursor={"pointer"} />
                    </Flex>
                  )}
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <NewsFeedProfile />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NewsFeed;
