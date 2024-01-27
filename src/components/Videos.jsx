import { VStack, Stack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://www.youtube.com/embed/xbedjCeXf4w',
    'https://www.youtube.com/embed/QsHWebfAwpY',
    'https://www.youtube.com/embed/2OtethKWPY0',
    'https://www.youtube.com/embed/7ssp44DydyA',
    'https://www.youtube.com/embed/T7h7mm69W84',
    
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <iframe
          width={'100%'}
          height={'80%'}
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {/* <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video> */}

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo.This is called
            description
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
       
       {videosArr.map((item,index)=>(
        <Button colorScheme='purple' variant={'ghost'} w={'full'} onClick={()=>setVideoSrc(item)}>
            Lecture {index+1}
        </Button>
       ))}

      </VStack>
    </Stack>
  );
};

export default Videos;
