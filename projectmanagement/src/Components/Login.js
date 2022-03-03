import React from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  HStack
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="blue.100"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.600" />
        <Heading as='h3' size='lg' p="1rem" color="black.400">Sign in to your account </Heading>
        <Box minW={{ base: "90%", md: "468px" }} rounded={'lg'} boxShadow={'lg'} borderWidth='1px'>
          <form>
            <Stack
              spacing={10}
              p="2rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              py="4rem"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.400" />}
                  />
                  <Input type="email" placeholder="Email Address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.400" />}
                  />
                  <Input
                    type={"password"}
                    placeholder="Password"
                  />
                </InputGroup>
              </FormControl>
              <Link to='/dashboard'>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Login
                </Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
      <HStack mt={5}>
        <Box>
          New to us?{" "}
        </Box>
        <Link to='/signup'>
          <Box fontWeight='bold'>
            Sign Up
          </Box>
        </Link>
      </HStack>
    </Flex>
  )
}

export default Login