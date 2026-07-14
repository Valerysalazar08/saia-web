import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Boton from '@/components/atoms/Boton';

export default function ListoParaEmpezar() {
  return (
    <Box as="section" bg="white" py={{ base: 10, md: 14 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 6, md: 10 }}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          gap={6}
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.100"
          boxShadow="0 2px 20px rgba(0,0,0,0.06)"
          overflow="hidden"
        >
          {/* Barra vertical gradiente izquierda */}
          <Box
            w="15px"
            alignSelf="stretch"
            bgGradient="to-b"
            gradientFrom="#33BEDC"
            gradientTo="#2EEDAD"
            flexShrink={0}
            display={{ base: 'none', md: 'block' }}
          />

          <VStack
            align="flex-start"
            gap={2}
            flex={1}
            py={8}
            pl={{ base: 6, md: 4 }}
            pr={{ base: 6, md: 0 }}
          >
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="900" color="#0A1628">
              ¿Listo para comenzar?
            </Heading>
            <Text fontSize="sm" fontWeight="700" color="#0A1628" lineHeight="tall" maxW="480px">
              Únete al nuevo sistema de ingreso que utilizan los aprendices
              para un ingreso más inteligente y seguro. El proceso de
              registro toma menos de 2 minutos.
            </Text>
          </VStack>

          <Box pr={{ base: 6, md: 8 }} pb={{ base: 8, md: 0 }}>
            <Boton variante="gradiente" size="lg" px={8}>
              Registrarme →
            </Boton>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
