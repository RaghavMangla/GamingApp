import { Container, Heading,VStack,Input, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={"stretch"} spacing={"5"} w={['full','96']} m={"auto"} my={"9"} >
                <Heading  alignSelf={'center'}>VIDEO HUB</Heading>
                <Avatar alignSelf={"center"} boxSize={'28'}/>
                <Input placeholder={"Name"} type={'text'} required focusBorderColor={"purple.500"}/> 
                <Input placeholder={"Email"} type={'email'} required focusBorderColor={"purple.500"}/> 
                <Input placeholder={"Password"} type={'password'} required focusBorderColor={"purple.500"}/> 
                <Button colorScheme={'purple'} type={'submit'}>
                    Sign Up
                </Button>
                <Text textAlign={"right"}>Already signed up?
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme="purple">
                <Link to="/login">Login now</Link>
                </Button>
                </Text>

            </VStack>
        </form>
    </Container>
  )
}

export default SignUp;
