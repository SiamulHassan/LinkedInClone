import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Project from "../Project/Project";
import { Link } from "react-router-dom";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

const NavTab = () => {
  return (
    <>
      <Tabs variant={"enclosed"} mt={"5rem"}>
        <TabList>
          <Tab
            fontSize={"1.6rem"}
            textTransform={"uppercase"}
            backgroundColor={"#ffffff"}
            color={"#000"}
            borderTop={"1px solid #ddd"}
            borderBottom={"1px solid #ddd"}
            borderLeft={"1px solid #ddd"}
            px={"80px"}
            py={"15px"}
            position={"relative"}
            _selected={{
              color: "#fff",
              position: "relative",
              zIndex: "1",
              _after: {
                content: "''",
                position: "absolute",
                top: "-17px",
                left: "0",
                width: "100%",
                height: "127%",
                background: "#0088cc",
                border: "1px solid transparent",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                zIndex: "-1",
              },
            }}
          >
            Profile
          </Tab>
          <Tab
            fontSize={"1.6rem"}
            textTransform={"uppercase"}
            backgroundColor={"#fff"}
            borderTop={"1px solid #ddd"}
            borderBottom={"1px solid #ddd"}
            borderLeft={"1px solid #ddd"}
            color={"#000"}
            px={"80px"}
            py={"15px"}
            _selected={{
              color: "#fff",
              position: "relative",
              zIndex: "1",
              _after: {
                content: "''",
                position: "absolute",
                top: "-17px",
                left: "0",
                width: "100%",
                height: "127%",
                background: "#0088cc",
                border: "1px solid transparent",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                zIndex: "-1",
              },
            }}
          >
            Friends
          </Tab>
          <Tab
            fontSize={"1.6rem"}
            textTransform={"uppercase"}
            borderTop={"1px solid #ddd"}
            borderBottom={"1px solid #ddd"}
            borderLeft={"1px solid #ddd"}
            borderRight={"1px solid #ddd"}
            backgroundColor={"#fff"}
            color={"#000"}
            px={"80px"}
            py={"15px"}
            _selected={{
              color: "#fff",
              position: "relative",
              zIndex: "1",
              _after: {
                content: "''",
                position: "absolute",
                top: "-17px",
                left: "0",
                width: "100%",
                height: "127%",
                background: "#0088cc",
                border: "1px solid transparent",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                zIndex: "-1",
              },
            }}
          >
            Posts
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel mt={"2rem"} borderRadius={"4px"}>
            <Box className="about-section" padding={"3rem"} bg={"#fff"}>
              <Heading as="h2" size="2xl" noOfLines={1}>
                About
              </Heading>
              <Text
                maxW={"1000px"}
                w={"100%"}
                lineHeight={"150%"}
                fontSize={"18px"}
                mt={"13px"}
                mb={"20px"}
              >
                I&apos;m more experienced in eCommerce web projects and mobile
                banking apps, but also like to work with creative projects, such
                as landing pages or unusual corporate websites.
              </Text>
              <Link
                to="#"
                style={{
                  textTransform: "uppercase",
                  color: "#0275B1",
                }}
              >
                see more
              </Link>
            </Box>
            <Box className="project-section" mt={"20px"} mb={"30px"}>
              <Project />
            </Box>
            <Box className="experience-section" mt={"20px"} mb={"30px"}>
              <Experience />
            </Box>
            <Box className="experience-section" mt={"20px"} mb={"30px"}>
              <Education />
            </Box>
          </TabPanel>
          {/* tab 2 */}
          <TabPanel>
            <Box padding={"3rem"}>
              <Heading as="h2" size="3xl" noOfLines={1}>
                Friends
              </Heading>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box padding={"3rem"}>
              <Heading as="h2" size="3xl" noOfLines={1}>
                Posts
              </Heading>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default NavTab;
