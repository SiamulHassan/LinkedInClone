import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
// build dummy data where img,link thakbe
// suru te 3ta image dekhabe, niche btn thakbe 'view all' e click krle pop up ashbe or onno page e niye jabe sekhane all project dekhabe. img er majhkhane click korle sei project er live link e niye jabe
import projectImgOne from "../../assets/project-1.png";
import projectImgTwo from "../../assets/project-2.png";
import projectImgThree from "../../assets/project-3.png";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <>
      <Box backgroundColor={"#fff"} borderRadius={"8px"} padding={"30px"}>
        <Flex gap={"20px"} align={"center"} mb={"20px"}>
          <Heading as="h2" size="2xl">
            Projects
          </Heading>
          <Text mt={"8px"} color={"#8d8d8d"}>
            3 of 12
          </Text>
        </Flex>
        <Flex gap={"20px"}>
          <Image
            maxW={"33%"}
            w={"100%"}
            objectFit="cover"
            src={projectImgOne}
            alt="project-image"
          />
          <Image
            maxW={"33%"}
            w={"100%"}
            objectFit="cover"
            src={projectImgTwo}
            alt="project-image"
          />
          <Image
            maxW={"33%"}
            w={"100%"}
            objectFit="cover"
            src={projectImgThree}
            alt="project-image"
          />
        </Flex>
        <Flex
          className="project-btns"
          gap={"20px"}
          justify={"center"}
          mt={"20px"}
        >
          <Box className="upload-project">
            <Button
              colorScheme="telegram"
              fontWeight={"500"}
              fontSize={"12px"}
              textTransform={"capitalize"}
              py={"16px"}
            >
              Upload Project
            </Button>
          </Box>
          <Box className="show-all">
            <Link to="#">
              <Button
                colorScheme="telegram"
                fontWeight={"500"}
                fontSize={"12px"}
                textTransform={"capitalize"}
                py={"16px"}
              >
                Show All
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Project;
