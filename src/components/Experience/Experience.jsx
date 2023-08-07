import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "./style.css";
import experience from "../../assets/experience.png";
import upwork from "../../assets/upwork.png";
const Experience = () => {
  return (
    <>
      <Box
        className="experience"
        padding={"3rem"}
        backgroundColor={"#fff"}
        borderRadius={"8px"}
      >
        <Heading as="h2" size="2xl">
          Experience
        </Heading>
        <Box
          className="experience-box"
          mt="3rem"
          position={"relative"}
          _after={{
            content: "''",
            position: "absolute",
            bottom: "-15px",
            left: "0",
            w: "100%",
            h: "1px",
            backgroundColor: "#e4e4e4",
          }}
        >
          <Flex gap={"2rem"}>
            <Box
              className="experience-logo"
              w={"54px"}
              h={"54px"}
              overflow={"hidden"}
              borderRadius={"50%"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit="cover"
                src={experience}
                alt="experience-image"
              />
            </Box>
            <Box className="experience-details">
              <Heading as="h3" size="xl">
                Freelance UX/UI designer
              </Heading>
              <Flex gap={"3rem"} mt="1.6rem" mb="1rem">
                <Text fontSize={"14px"}>Self Employed</Text>
                <Text fontSize={"14px"}>Around the world</Text>
              </Flex>
              <Flex gap={"3rem"} mb="1.6rem">
                <Text fontSize={"14px"}>Jun 2016 — Present</Text>
                <Text fontSize={"14px"} color={"#0275B1"}>
                  3 yrs 3 mos
                </Text>
              </Flex>
              <Text maxW={"719px"} fontSize={"1.4rem"} lineHeight={"160%"}>
                Work with clients and web studios as freelancer. Work in next
                areas: eCommerce web projects; creative landing pages; iOs and
                Android apps; corporate web sites and corporate identity
                sometimes.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          className="experience-box"
          mt="3rem"
          position={"relative"}
          _after={{
            content: "''",
            position: "absolute",
            bottom: "-22px",
            left: "0",
            w: "100%",
            h: "1px",
            backgroundColor: "#e4e4e4",
          }}
        >
          <Flex gap={"2rem"}>
            <Box
              className="experience-logo"
              w={"54px"}
              h={"54px"}
              overflow={"hidden"}
              borderRadius={"50%"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit="cover"
                src={upwork}
                alt="experience-image"
              />
            </Box>
            <Box className="experience-details">
              <Heading as="h3" size="xl">
                Freelance UX/UI designer
              </Heading>
              <Flex gap={"3rem"} mt="1.6rem" mb="1rem">
                <Text fontSize={"14px"}>Self Employed</Text>
                <Text fontSize={"14px"}>Around the world</Text>
              </Flex>
              <Flex gap={"3rem"} mb="1.6rem">
                <Text fontSize={"14px"}>Jun 2016 — Present</Text>
                <Text fontSize={"14px"} color={"#0275B1"}>
                  3 yrs 3 mos
                </Text>
              </Flex>
              <Text maxW={"719px"} fontSize={"1.4rem"} lineHeight={"160%"}>
                Work with clients and web studios as freelancer. Work in next
                areas: eCommerce web projects; creative landing pages; iOs and
                Android apps; corporate web sites and corporate identity
                sometimes.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
