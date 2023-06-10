//css
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./style.css";
// images
import linkdenLogo from "../../assets/logo.jpg";
const Login = () => {
  return (
    <>
      <Container centerContent>
        <Flex alignItems={"center"} h={"95vh"}>
          <Box
            className="content-wrapper"
            w="80rem"
            bg="#fff"
            boxShadow="0 3px 10px rgba(0,0,0,0.09)"
            py={"12rem"}
            borderRadius={"1.5rem"}
          >
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Image
                src={linkdenLogo}
                maxW={"4rem"}
                alt="LinkedInLogo"
                mb={"2rem"}
              />
              <Heading as="h2" size="3xl" color="#11175d" mb={"1.4rem"}>
                Login
              </Heading>
              <Text fontSize="3xl" color="#11175d" mb={"4rem"}>
                Free register and you can enjoy it
              </Text>
            </Flex>
            <Flex className="input-fields" justifyContent={"center"}>
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
                Log In
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Login;
