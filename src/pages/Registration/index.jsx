// css
import "./style.css";
// chakra ui
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
//images
import linkedInLogo from "../../assets/logo.jpg";

const Registration = () => {
  return (
    <>
      <Container maxWidth={"120rem"} centerContent>
        <Flex alignItems="center" h="95vh">
          <Box
            className="content-wrapper"
            w="80rem"
            bg="#fff"
            boxShadow="0 3px 10px rgba(0,0,0,0.09)"
            py={"12rem"}
            borderRadius={"1.5rem"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              className="registration-heading-part"
            >
              <Image
                maxW={"4rem"}
                src={linkedInLogo}
                alt="LinkedIn"
                mb={"3.5rem"}
              />
              <Heading as="h1" size="3xl" color="#11175d" mb={"1.4rem"}>
                Get started with easily register
              </Heading>
              <Text fontSize="3xl" color="#11175d" mb={"6rem"}>
                Free register and you can enjoy it
              </Text>
            </Flex>

            <Flex className="registration-form" justifyContent="center">
              <Stack spacing={10}>
                <Input
                  p={"3.5rem"}
                  variant="outline"
                  fontSize="1.8rem"
                  placeholder="Email"
                  size="lg"
                  w="40rem"
                />
                <Input
                  p={"3.5rem"}
                  variant="outline"
                  fontSize="1.8rem"
                  placeholder="Full Name"
                  size="lg"
                  w="40rem"
                />
                <Input
                  p={"3.5rem"}
                  variant="outline"
                  fontSize="1.8rem"
                  placeholder="Password"
                  size="lg"
                  w="40rem"
                />
              </Stack>
            </Flex>
            <Flex justifyContent={"center"} mt={"3rem"}>
              <Button
                className="sign-up"
                bg="#086FA4"
                color="#fff"
                fontSize={"2rem"}
                py={"2.5rem"}
                px={"2.5rem"}
              >
                Sign Up
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Registration;
