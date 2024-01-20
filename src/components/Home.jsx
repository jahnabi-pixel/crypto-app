import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import btcSrc from '../assets/btc.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      position="relative"
      bgColor={'blackAlpha.900'}
      w={'full'}
      h={'85vh'}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Animation div */}
      <motion.div
        whileHover={{ rotate: 10, scale: 1.2 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.5 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70%',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Image w={'full'} h={'full'} objectFit={'contain'} src={btcSrc} />
        </motion.div>
      </motion.div>

      {/* VStack to vertically stack elements */}
      <VStack
        position="absolute"
        top="70%"
        left="50%"
        transform="translate(-50%, -50%)"
        spacing={2}
      >
        <Text
          fontSize={'6xl'}
          textAlign={'center'}
          fontWeight={'thin'}
          color={'#FFD700'}
          filter={'grayscale(1)'}
        >
          Xcrypto
        </Text>

        {/* Add other elements here if needed */}
      </VStack>
    </Box>
  );
};

export default Home;
