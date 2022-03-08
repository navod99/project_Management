import React, { useState } from 'react'
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate,useNavigate } from 'react-router-dom';



const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const Login = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const auth = getAuth();
  const navigate=useNavigate();

  const handleLogin =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Singed in user: ", user);
      navigate('/home')
      
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error occured: ", errorCode, errorMessage);
    });

  }


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
                  <Input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email Address"
                    required />
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
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </InputGroup>
              </FormControl>
             
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              
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