import { VStack, Text, Heading } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface SeccionHeaderProps {
  etiqueta?: string;
  titulo: ReactNode;
  subtitulo?: string;
  centrado?: boolean;
}

export default function SeccionHeader({
  etiqueta,
  titulo,
  subtitulo,
  centrado = false,
}: SeccionHeaderProps) {
  return (
    <VStack
      align={centrado ? 'center' : 'flex-start'}
      gap={3}
      textAlign={centrado ? 'center' : 'left'}
    >
      {etiqueta && (
        <Text
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="wider"
          bgGradient="to-r"
          gradientFrom="#33BEDC"
          gradientTo="#2EEDAD"
          bgClip="text"
        >
          {etiqueta}
        </Text>
      )}
      <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="#0A1628">
        {titulo}
      </Heading>
      {subtitulo && (
        <Text color="gray.500" fontSize="sm" maxW="520px" lineHeight="tall">
          {subtitulo}
        </Text>
      )}
    </VStack>
  );
}
