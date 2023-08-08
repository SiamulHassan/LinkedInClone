import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import realBannr from "../../assets/real.jpg";
import profileImage from "../../assets/profile-img.jpg";
import linkedInGrey from "../../assets/logo-grey.svg";

const NewsFeedProfile = () => {
  return (
    <>
      <Box
        className="feed-profile-bannar"
        bgImage={realBannr}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        p={"110px 0"}
        borderTopLeftRadius={"10px"}
        borderTopRightRadius={"10px"}
        mt={"4rem"}
      ></Box>
      <Box
        className="profile-description"
        bgColor={"#fff"}
        pos={"relative"}
        padding={"50px 0"}
        borderBottomLeftRadius={"10px"}
        borderBottomRightRadius={"10px"}
      >
        <Center
          width={"10rem"}
          height={"10rem"}
          borderRadius={"50%"}
          overflow={"hidden"}
          bgColor={"#fff"}
          pos={"absolute"}
          top={"-50px"}
          left={"50%"}
          transform="translateX(-50%)"
        >
          <Image
            src={profileImage}
            width={"9rem"}
            height={"9rem"}
            borderRadius={"50%"}
            objectFit={"cover"}
            overflow={"hidden"}
          />
        </Center>
        <Box className="profile-designation">
          <Flex align={"center"} justify={"center"} gap={"1rem"}>
            <Heading as="h2" size="xl">
              Dmitry Kargaev
            </Heading>
            <Image src={linkedInGrey} />
          </Flex>
          <Flex justify={"center"} mt="1rem">
            <Text
              maxW={"290px"}
              w={"100%"}
              textAlign={"center"}
              lineHeight={"150%"}
            >
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default NewsFeedProfile;
