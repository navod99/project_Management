import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    InputRightElement,
    chakra,
    Box,
    FormControl,
    FormLabel,
    HStack
} from "@chakra-ui/react";
import { useState } from 'react';
import React from 'react'
import { FaLock } from "react-icons/fa";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const CFaLock = chakra(FaLock);

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

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
                <Heading as='h3' size='lg' p="1rem" color="black.400">Sign Up to your account </Heading>
                <Box minW={{ base: "90%", md: "468px" }} rounded={'lg'} boxShadow={'lg'} borderWidth='1px'>
                    <form >
                        <Stack
                            spacing={10}
                            p="2rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                            py="4rem"
                        >
                            <HStack>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='first-name'>First name</FormLabel>
                                    <Input id='first-name' />
                                </FormControl>
                                <FormControl isRequired >
                                    <FormLabel htmlFor='last-name'>Last name</FormLabel>
                                    <Input id='last-name' />
                                </FormControl>
                            </HStack>
                            <FormControl isRequired>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input id='email' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.400" />}
                                    />
                                    <Input id='password' type={showPassword ? "text" : "password"} />
                                    <InputRightElement >
                                        <Button
                                            h="2rem" size="sm"
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <BiShow /> : <BiHide />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='password'>Confirm Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.400" />}
                                    />
                                    <Input id='cPassword' type={"password"} />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="blue"
                                width="full"
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <HStack mt={1}>
                <Box>
                    Already a user?{" "}
                </Box>
                <Box as="button" fontWeight='bold' onClick={() => navigate('/')} >
                    Login
                </Box>
            </HStack>
        </Flex>
    )
}

export default Signup