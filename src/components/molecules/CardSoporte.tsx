import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import type { ReactNode } from 'react';

interface CardSoporteProps {
  numero: string;
  icono: ReactNode;
  iconoColor: string;
  titulo: string;
  descripcion: string;
}

export default function CardSoporte({ numero, icono, iconoColor, titulo, descripcion }: CardSoporteProps) {
  return (
    <Box
      flex={1}
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      p={6}
      boxShadow="0 2px 16px rgba(0,0,0,0.05)"
      position="relative"
      cursor="pointer"
      _hover={{ boxShadow: '0 8px 30px rgba(51,190,220,0.12)', transform: 'translateY(-2px)' }}
      transition="all 0.25s"
    >
      <Text
        position="absolute" top={4} right={5}
        fontSize="2.5rem" fontWeight="900" color="gray.100" lineHeight={1}
      >
        {numero}
      </Text>

      <VStack align="flex-start" gap={3} position="relative" zIndex={1}>
        <Box color={iconoColor}>{icono}</Box>
        <Text fontWeight="800" fontSize="md" color="#0A1628">{titulo}</Text>
        <Text fontSize="sm" color="gray.500" lineHeight="tall">{descripcion}</Text>
        <HStack gap={1} fontSize="xs" fontWeight="600" color="#33BEDC" cursor="pointer">
          <Text>Ver más</Text>
          <FaChevronRight size={10} />
        </HStack>
      </VStack>
    </Box>
  );
}
