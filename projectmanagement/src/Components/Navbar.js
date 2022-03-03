import { Box, Flex, IconButton, useDisclosure, useColorModeValue, HStack, MenuButton, Menu, Button, Avatar, Stack } from "@chakra-ui/react"
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { ImMenu } from 'react-icons/im'
import { Link } from "react-router-dom"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <AiFillCloseCircle /> : <ImMenu />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>Logo</Box>
          <HStack
            as={'nav'}
            spacing={10}
            display={{ base: 'none', md: 'flex' }}>
            <Link to='/dashboard'>
              <Box>
                Dashboard
              </Box>
            </Link>
            <Link to='/home'>
              <Box>
                Projects
              </Box>
            </Link>
            <Link to='/add'>
              Add Project
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                bg='teal.500'
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Box>
              Dashboard
            </Box>
            <Box>
              Projects
            </Box>
            <Link to='/add'>
              Add Project
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar