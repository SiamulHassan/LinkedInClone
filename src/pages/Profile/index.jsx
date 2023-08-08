// chakra ui
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
// styling and fonts
import theme from "./theme";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/800.css";
// importing images
import profileBannar from "../../assets/real.jpg";
import profileImage from "../../assets/profile-img.jpg";
import linkedInGrey from "../../assets/logo-grey.svg";
import planeIcon from "../../assets/plane.png";
// icons
import { LuEdit } from "react-icons/lu";
import NavTab from "../../components/Navigation/NavTab";

const Profile = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor="#F7F9FB">
        <Container maxW="1320px">
          <Box className="profile-bannar">
            <Box
              width="100%"
              padding="140px 0"
              className="bannar-profile"
              backgroundImage={profileBannar}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              pos="relative"
            >
              <Flex justify="end" p="20px" pos="absolute" top="0" right="0">
                <Center>
                  <Button
                    leftIcon={<LuEdit fontSize="20px" />}
                    colorScheme="gray"
                    fontSize="16px"
                    p="20px"
                    fontWeight="400"
                  >
                    Edit profile
                  </Button>
                </Center>
              </Flex>
            </Box>
            <Box>
              <Flex
                className="bannar-profile-description"
                backgroundColor="#fff"
                borderBottomRightRadius="10px"
                borderBottomEndRadius="10px"
                pt="25px"
                pb="35px"
                pl="25px"
                pr="40px"
                gap="30px"
              >
                <Center
                  className="top-circle"
                  w="170px"
                  h="146px"
                  mt="-60px"
                  borderRadius="50%"
                  backgroundColor="#fff"
                  pos="relative"
                >
                  <Center
                    className="inner-circle"
                    w="140px"
                    h="140px"
                    borderRadius="50%"
                    overflow="hidden"
                  >
                    <Image
                      objectFit="cover"
                      src={profileImage}
                      alt="Dan Abramov"
                    />
                  </Center>
                </Center>
                <Box w="100%">
                  <Flex>
                    <Flex gap="15px">
                      <Heading>Dmitry Kargaev</Heading>
                      <Image src={linkedInGrey} w="25px" alt="Dan Abramov" />
                    </Flex>
                    <Spacer />
                    <Flex align="center" gap="1rem">
                      <Image src={planeIcon} w="15px" h="15px" />
                      <Text fontSize="12px">
                        Saint Petersburg, Russian Federation
                      </Text>
                    </Flex>
                  </Flex>
                  <Text
                    fontSize="14px"
                    lineHeight="150%"
                    my="13px"
                    maxW={"583px"}
                  >
                    Freelance UX/UI designer, 80+ projects in web design, mobile
                    apps (iOS & android) and creative projects. Open to offers.
                  </Text>
                  <Button
                    colorScheme="telegram"
                    fontWeight={"500"}
                    fontSize={"12px"}
                    textTransform={"uppercase"}
                    w={"170px"}
                    py={"16px"}
                  >
                    contact info
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
          {/* profile bannar ends */}
          <NavTab />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Profile;
