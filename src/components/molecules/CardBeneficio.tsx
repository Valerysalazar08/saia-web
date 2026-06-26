import { Box, Text, VStack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface CardBeneficioProps {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
}

export default function CardBeneficio({ icono, titulo, descripcion }: CardBeneficioProps) {
  return (
    <Box
      borderRadius="2xl"
      bg="white"
      border="1px solid"
      borderColor="rgba(51,190,220,0.12)"
      p={7}
      boxShadow="0 2px 16px rgba(51,190,220,0.07)"
      _hover={{ boxShadow: '0 8px 30px rgba(51,190,220,0.15)', transform: 'translateY(-3px)' }}
      transition="all 0.25s"
    >
      <VStack align="flex-start" gap={4}>
        <Box
          w={11}
          h={11}
          borderRadius="xl"
          bgGradient="to-br"
          gradientFrom="rgba(51,190,220,0.15)"
          gradientTo="rgba(46,237,173,0.15)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#33BEDC"
        >
          {icono}
        </Box>
        <VStack align="flex-start" gap={2}>
          <Text fontWeight="bold" fontSize="md" color="#0A1628">
            {titulo}
          </Text>
          <Text fontSize="sm" color="gray.500" lineHeight="tall">
            {descripcion}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
