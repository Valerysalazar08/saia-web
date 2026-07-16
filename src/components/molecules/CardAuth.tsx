import { Box, Flex,  Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import TextoGradiente from '@/components/atoms/TextoGradiente';
import type { ReactNode } from 'react';

interface CardAuthProps {
  /** Ruta a la que vuelve la flecha superior izquierda */
  backTo: string;
  /** Texto del link de vuelta */
  backLabel: string;
  /** Título del formulario*/
  titulo: string;
  /** Subtítulo */
  subtitulo: string;
  /** Contenido principal (formulario) */
  children: ReactNode;
  /** Links informativos */
  links?: ReactNode;
  /** Ancho máximo de la card */
  maxW?: string;
}

export default function CardAuth({
  backTo,
  backLabel,
  titulo,
  subtitulo,
  children,
  links,
  maxW = '420px',
}: CardAuthProps) {
  return (
    <Flex
      flex={1}
      bg="#f0f2f5"
      minH="100vh"
      align="center"
      justify="center"
      px={{ base: 4, md: 8 }}
      py={8}
      direction="column"
      gap={4}
    >
      {/* Top bar */}
      <Flex w="full" maxW={maxW} justify="space-between" align="center">
        <RouterLink to={backTo}>
          <Flex
            align="center" gap={2}
            color="#0A1628"
            _hover={{ color: '#33BEDC' }}
            transition="color 0.2s"
          >
            <FaArrowLeft size={14} />
            <Text fontSize="sm" fontWeight="600">{backLabel}</Text>
          </Flex>
        </RouterLink>
      </Flex>

      {/* Card */}
      <Box
        w="full"
        maxW={maxW}
        bg="white"
        borderRadius="3xl"
        boxShadow="0 8px 40px rgba(0,0,0,0.1)"
        p={{ base: 6, md: 8 }}
        overflowY="auto"
        maxH="85vh"
      >
        <VStack gap={6} align="stretch">
          {/* Header */}
          <VStack gap={2} textAlign="center">
            <TextoGradiente
              fontWeight="900"
              fontSize="lg"
              letterSpacing="wider"
              textTransform="uppercase"
              as="h2"
            >
              {titulo}
            </TextoGradiente>
            <Text fontSize="sm" color="gray.500">
              {subtitulo}
            </Text>
          </VStack>

          {/* Formulario */}
          {children}

          {/* Links pie */}
          {links && (
            <VStack gap={1} align="flex-start">
              {links}
            </VStack>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}
