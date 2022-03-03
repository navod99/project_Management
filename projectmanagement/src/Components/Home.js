import { Box, Flex,Text, Heading, HStack, Link,UnorderedList, ListItem, Button, Badge } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    const projects = [{
        title: 'Hotel Management System',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    }, {
        title: 'Inventory Management',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    },
    {
        title: 'Inventory Management',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    }, {
        title: 'Inventory Management',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    },
    {
        title: 'Inventory Management',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    }, {
        title: 'Inventory Management',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    },
    {
        title: 'Inventory Management',
        details: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and',
        url: 'https://chakra-ui.com',
        manager: 'hbshcb ahscbaj',
        deadline: '2022.02.3',
        employees: ['Amal', 'Kamal', 'Nimal']
    }

    ]

    return (
        <Box >
            <Navbar />
            <Flex direction={'row'} wrap='wrap' justifyContent={'space-evenly'}>
                {projects.map((project) => (
                    <Box
                        maxW={'450px'}
                        w={'full'}
                        my='5rem'
                        //  bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'dark-lg'}
                        rounded={'md'}
                        overflow={'hidden'}
                    >
                        <HStack justifyContent={'center'} >
                            <Heading
                                as='h5'
                                size='md'
                                p={3}
                                px={3}
                                color={'black'}
                                rounded={'full'}>
                                {project.title}
                            </Heading>
                            <Badge colorScheme='green'>
                                Completed
                            </Badge>
                        </HStack>
                        <Box p={3}>
                            <Text as='samp' color='blue.600' >
                                {project.details}
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Text>
                                URL :
                                <Link px={2} href='https://chakra-ui.com' isExternal>
                                    {project.url}
                                </Link>
                            </Text>
                            <Text
                                fontSize={'sm'}
                                fontWeight={500}
                                //  bg={useColorModeValue('green.50', 'green.900')}
                                color={'green.500'}
                                p={3}
                                rounded={'full'}>
                                Project Manager : {project.manager}
                            </Text>
                        </Box>
                        {/* <Flex bg={useColorModeValue('gray.300', 'gray.500')} justifyContent='space-around'> */}
                        <Flex justifyContent='space-around'>
                            <Box p={3} >
                                <Heading as='h5' size='sm'>
                                    Assigned Employees
                                </Heading>
                                <UnorderedList>
                                    {console.log('first', project.employees)}
                                    {project.employees.map((empl) => (
                                        <ListItem>{empl}</ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                            <Box p={3} >
                                <Heading as='h5' size='sm'>
                                    Deadline :
                                </Heading>
                                <Text>
                                    {project.deadline}
                                </Text>
                            </Box>
                        </Flex>
                        <Flex py={5} justifyContent='space-around'>
                            <Button variant="solid" colorScheme="blue">
                                Edit
                            </Button>
                            <Button variant="solid" colorScheme="blue">
                                Delete
                            </Button>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

export default Home