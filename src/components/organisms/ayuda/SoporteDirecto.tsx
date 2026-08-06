import { useState } from 'react';
import { Box, Flex, VStack, Text, HStack,
  DialogRoot, DialogBackdrop, DialogPositioner,
  DialogContent, DialogHeader, DialogBody,
  DialogFooter, DialogCloseTrigger, Heading } from '@chakra-ui/react';
import { FaEnvelope, FaWhatsapp, FaChevronRight } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import SeccionHeader from '@/components/molecules/SeccionHeader';
import TextoGradiente from '@/components/atoms/TextoGradiente';
import Boton from '@/components/atoms/Boton';

export default function SoporteDirecto() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <Box as="section" bg="white" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={8}>
        <SeccionHeader
          titulo={
            <>
              Soporte{' '}
              <TextoGradiente fontWeight="900" fontSize={{ base: 'xl', md: '2xl' }}>
                directo:
              </TextoGradiente>
            </>
          }
          subtitulo="Si no encuentras lo que buscas, contáctanos en nuestros canales oficiales."
        />

        <Flex direction={{ base: 'column', md: 'row' }} gap={5} w="full">

          {/* Card Correo → va al formulario de contacto */}
          <RouterLink to="/#contacto" style={{ flex: 1 }}>
            <Box
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
              h="full"
            >
              <Text position="absolute" top={4} right={5}
                fontSize="2.5rem" fontWeight="900" color="gray.100" lineHeight={1}>
                01
              </Text>
              <VStack align="flex-start" gap={3} position="relative" zIndex={1}>
                <Box color="#EA4335"><FaEnvelope size={28} /></Box>
                <Text fontWeight="800" fontSize="md" color="#0A1628">Correo electrónico</Text>
                <Text fontSize="sm" color="gray.500" lineHeight="tall">
                  Envíanos tu consulta a través del formulario de contacto y te
                  responderemos en menos de 24 horas.
                </Text>
                <HStack gap={1} fontSize="xs" fontWeight="600" color="#33BEDC">
                  <Text>Ir al formulario</Text>
                  <FaChevronRight size={10} />
                </HStack>
              </VStack>
            </Box>
          </RouterLink>

          {/* Card WhatsApp → abre modal "Próximamente" */}
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
            onClick={() => setModalAbierto(true)}
            _hover={{ boxShadow: '0 8px 30px rgba(51,190,220,0.12)', transform: 'translateY(-2px)' }}
            transition="all 0.25s"
          >
            <Text position="absolute" top={4} right={5}
              fontSize="2.5rem" fontWeight="900" color="gray.100" lineHeight={1}>
              02
            </Text>
            <VStack align="flex-start" gap={3} position="relative" zIndex={1}>
              <Box color="#25D366"><FaWhatsapp size={28} /></Box>
              <Text fontWeight="800" fontSize="md" color="#0A1628">WhatsApp</Text>
              <Text fontSize="sm" color="gray.500" lineHeight="tall">
                Chatea con nuestro equipo de soporte y recibe ayuda de forma
                rápida y personalizada.
              </Text>
              <HStack gap={1} fontSize="xs" fontWeight="600" color="#33BEDC">
                <Text>Abrir chat</Text>
                <FaChevronRight size={10} />
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </VStack>

      {/* Modal WhatsApp próximamente */}
      <DialogRoot open={modalAbierto} onOpenChange={(e) => setModalAbierto(e.open)}>
        <DialogBackdrop bg="blackAlpha.600" />
        <DialogPositioner>
          <DialogContent borderRadius="2xl" maxW="380px" mx={4}>
            <DialogHeader pb={2}>
              <HStack gap={3}>
                <Box
                  w={10} h={10} borderRadius="xl"
                  bgGradient="to-br" gradientFrom="#33BEDC" gradientTo="#2EEDAD"
                  display="flex" alignItems="center" justifyContent="center"
                  color="white"
                >
                  <FaWhatsapp size={20} />
                </Box>
                <Heading fontSize="lg" fontWeight="800" color="#0A1628">
                  Canal de WhatsApp
                </Heading>
              </HStack>
            </DialogHeader>

            <DialogBody>
              <VStack align="flex-start" gap={3}>
                <Text fontSize="sm" color="gray.600" lineHeight="tall">
                  Nuestro canal de WhatsApp estará disponible muy pronto.
                  Mientras tanto, puedes contactarnos a través del formulario
                  de contacto o escribirnos al correo:
                </Text>
                <Box
                  bg="#f8fffe"
                  borderRadius="xl"
                  px={4}
                  py={3}
                  border="1px solid"
                  borderColor="rgba(51,190,220,0.2)"
                  w="full"
                >
                  <Text fontSize="sm" fontWeight="700" color="#33BEDC">
                    saiaoficial03@gmail.com
                  </Text>
                </Box>
              </VStack>
            </DialogBody>

            <DialogFooter gap={3} justifyContent="center">
              <RouterLink to="/#contacto" onClick={() => setModalAbierto(false)}>
                <Boton variante="gradiente" size="md" px={6}>
                  Ir al formulario
                </Boton>
              </RouterLink>
            </DialogFooter>

            <DialogCloseTrigger />
          </DialogContent>
        </DialogPositioner>
      </DialogRoot>
    </Box>
  );
}
