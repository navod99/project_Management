import React, { useEffect, useState } from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    Box,
    InputLeftAddon,
    FormControl,
    FormLabel,
    HStack,
    Textarea,
    Tag
} from "@chakra-ui/react";
import { DatePicker } from 'chakra-ui-date-input'
import { AiFillPlusCircle } from 'react-icons/ai'
import Navbar from './Navbar';

const AddProject = () => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState('');
    const [projectDetails, setProjectDetails] = useState({
        projectTitle: '',
        details: '',
        url: '',
        projectManager: '',
        deadline: '',
        assigners: []
    })

    useEffect(() => {
        console.log('cat', employees)
    }, [employees]);

    useEffect(() => {
        console.log('man', employee)
    }, [employee]);

    useEffect(() => {
        console.log('dog', projectDetails)
    }, [projectDetails]);

    const onChange = (e) => {
        setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value })
    }

    const addnew = () => {
        setEmployees([...employees, employee])
        setProjectDetails({ ...projectDetails, [projectDetails.assigners]: employee })
        setEmployee('')
    }
    return (
        <Box backgroundColor="blue.100"  >
            <Navbar />
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading as='h3' size='lg' p="1rem" color="black.400">Add a new Project </Heading>
                    <Box maxW={{ md: "600px" }} minW={{ base: "90%", md: "468px" }} rounded={'lg'} boxShadow={'lg'} borderWidth='1px'>
                        <form >
                            <Stack
                                spacing={10}
                                p="2rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                                py="3rem"
                            >
                                <FormControl isRequired>
                                    <FormLabel htmlFor='project-title'>Project Title</FormLabel>
                                    <Input id='project-title' name='projectTitle' onChange={(e) => onChange(e)} value={projectDetails.projectTitle} />
                                </FormControl>
                                <FormControl isRequired >
                                    <FormLabel htmlFor='project-details'>Project Details</FormLabel>
                                    <Textarea name='details' onChange={(e) => onChange(e)} value={projectDetails.details} placeholder='Here is a sample placeholder' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='url'>Project URL</FormLabel>
                                    <InputGroup size='sm'>
                                        <InputLeftAddon children='https://' />
                                        <Input name='url' onChange={(e) => onChange(e)} value={projectDetails.url} placeholder='mysite' />
                                    </InputGroup>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='manager'>Project Manager</FormLabel>
                                    <Input name='projectManager' onChange={(e) => onChange(e)} value={projectDetails.projectManager} id='project-manager' />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='manager'>Deadline</FormLabel>
                                    <DatePicker
                                        placeholder='Date picker placeholder'
                                        name='deadline'
                                        onChange={(e) => setProjectDetails({ ...projectDetails, deadline: e })}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='employee'>Assigned Employees</FormLabel>

                                    <HStack>
                                        <Input name='employee' onChange={(e) => setEmployee(e.target.value)} value={employee} id='employee' />

                                        <AiFillPlusCircle onClick={() => addnew()} size={30} />

                                    </HStack>
                                </FormControl>
                                <Flex direction={'row'} wrap='wrap' >
                                    {employees.map((empl) => (
                                        <Tag mt={'2'} mr={'2'} size={'md'} key={'md'} variant='solid' colorScheme='teal'>
                                            {empl}
                                        </Tag>
                                    ))}
                                </Flex>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="blue"
                                    width="full"
                                >
                                    Add
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
}

export default AddProject