import {
  VStack,
  Stack,
  Box,
  Text,
  Heading,
  HStack,
  Button,
  Input,
} from '@chakra-ui/react';
import {  AiOutlineSend,AiOutlineYoutube,AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} p={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} p={'2'}>
            <Input
              placeholder="Enter email here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Stack direction={["row","column"]}>
          <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target={"blank"} href="https://www.youtube.com/@raghavmangla2481/"><AiOutlineYoutube size={'20'}/></a>
          </Button>
          <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target={"blank"} href="https://www.instagram.com/raghav_m19/"><AiOutlineInstagram size={'20'}/></a>
          </Button>
          <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target={"blank"} href="https://github.com/RaghavMangla"><AiOutlineGithub size={'20'}/></a>
          </Button>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
