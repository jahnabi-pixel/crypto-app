import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Us</Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            Welcome to Xcrypto, the premier crypto trading app in India! We are
            your trusted partner in navigating the exciting world of
            cryptocurrencies. Our platform offers real-time data, comprehensive
            insights, and intuitive graphs to empower your trading decisions.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
