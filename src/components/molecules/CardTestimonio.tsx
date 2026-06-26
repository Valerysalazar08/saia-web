import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import comillas from '../../assets/images/comillas.svg';

interface CardTestimonioProps {
  quote: string;
  nombre: string;
  rol: string;
  iniciales: string;
}

export default function CardTestimonio({ quote, nombre, rol, iniciales }: CardTestimonioProps) {
  return (
    <Box
      flexShrink={0}
      w="280px"
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0 2px 20px rgba(0,0,0,0.06)"
      p={6}
      mx="10px"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <Box w="36px">
        <img src={comillas} alt="comillas" width={36} />
      </Box>

      <Text fontSize="sm" color="#0A1628" fontWeight="500" lineHeight="tall" flex={1}>
        {quote}
      </Text>

      <Box h="1px" bg="gray.100" />

      <Flex align="center" gap={3}>
        <Flex
          w={10}
          h={10}
          borderRadius="full"
          bgGradient="to-br"
          gradientFrom="#33BEDC"
          gradientTo="#2EEDAD"
          align="center"
          justify="center"
          flexShrink={0}
        >
          <Text fontSize="xs" fontWeight="800" color="white">
            {iniciales}
          </Text>
        </Flex>
        <VStack align="flex-start" gap={0}>
          <Text fontSize="sm" fontWeight="700" color="#0A1628">
            {nombre}
          </Text>
          <Text fontSize="xs" color="#33BEDC" fontWeight="500">
            {rol}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
