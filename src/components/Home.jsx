import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btcSrc from '../assets/btc.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      w={'full'}
      h={'85vh'}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.2 }} // Increase scale on hover
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        initial={{ opacity: 0, scale: 0.5 }} // Initial size and opacity
        animate={{ opacity: 1, scale: 1.5 }} // Larger size and opacity during animation
        exit={{ opacity: 0 }}
        style={{
          width: '100%',
          height: '70%',
          overflow: 'hidden',
          position: 'relative',
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

      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'#FFD700'}
        mt={'-10'} // Adjust the margin-top value
        filter={'grayscale(1)'}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
