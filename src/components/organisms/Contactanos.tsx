import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Flex, Heading, Text, VStack, Grid, Input, Textarea } from '@chakra-ui/react';
import Boton from '@/components/atoms/Boton';
import TextoGradiente from '@/components/atoms/TextoGradiente';

const SERVICE_ID  = 'service_saiaweb';
const TEMPLATE_ID = 'template_tv0m9hf';
const PUBLIC_KEY  = '-u2gV1YOEMVYLXe17';

const focusStyle = {
  borderColor: '#33BEDC',
  boxShadow: '0 0 0 1px #33BEDC',
};

export default function Contactanos() {
  const formRef = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<'idle' | 'ok' | 'error'>('idle');

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setEnviando(true);
    setEstado('idle');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setEstado('ok');
      formRef.current.reset();
    } catch {
      setEstado('error');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Box as="section" id="contacto" bg="white" py={{ base: 14, md: 20 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: 12, lg: 16 }}
        align="center"
      >
        {/* Left */}
        <VStack align="flex-start" gap={5} flex={1}>
          <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="900" lineHeight="shorter">
            <TextoGradiente fontWeight="900" fontSize={{ base: '3xl', md: '4xl' }}>
              Contáctanos
            </TextoGradiente>
          </Heading>
          <Text color="#0A1628" fontSize="sm" fontWeight="400" lineHeight="tall" maxW="320px">
            Estamos aquí para ayudarte. Si tienes preguntas sobre la
            implementación o soporte técnico, nuestro equipo te responderá
            en menos de 24 horas.
          </Text>
        </VStack>

        {/* Right: form card */}
        <Box
          flex={1.3}
          bg="white"
          borderRadius="3xl"
          boxShadow="0 8px 40px rgba(0,0,0,0.1)"
          p={{ base: 6, md: 8 }}
          w="full"
        >
          <VStack gap={5} align="stretch">
            <Text fontWeight="700" fontSize="lg" color="#0A1628">
              Cuéntanos cómo podemos ayudarte
            </Text>

            <Box as="form" ref={formRef} onSubmit={manejarEnvio}>
              <VStack gap={4} align="stretch">
                {/* Nombre completo */}
                <Box>
                  <Text fontSize="xs" fontWeight="700" color="#0A1628" mb={1.5}>Nombre completo</Text>
                  <Input
                    name="from_name"
                    placeholder="Ej. Camilo Sancho"
                    borderRadius="xl"
                    borderColor="gray.200"
                    _focus={focusStyle}
                    _placeholder={{ color: 'gray.400' }}
                    required
                  />
                </Box>

                {/* Correo + Teléfono */}
                <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
                  <Box>
                    <Text fontSize="xs" fontWeight="700" color="#0A1628" mb={1.5}>Correo electrónico</Text>
                    <Input
                      name="reply_to"
                      type="email"
                      placeholder="email@ejemplo.com"
                      borderRadius="xl"
                      borderColor="gray.200"
                      _focus={focusStyle}
                      _placeholder={{ color: 'gray.400' }}
                      required
                    />
                  </Box>
                  <Box>
                    <Text fontSize="xs" fontWeight="700" color="#0A1628" mb={1.5}>Asunto</Text>
                    <Input
                      name="subject"
                      type="text"
                      placeholder="Motivo de tu mensaje"
                      borderRadius="xl"
                      borderColor="gray.200"
                      _focus={focusStyle}
                      _placeholder={{ color: 'gray.400' }}
                      required
                    />
                  </Box>
                </Grid>

                {/* Mensaje */}
                <Box>
                  <Text fontSize="xs" fontWeight="700" color="#0A1628" mb={1.5}>Tu mensaje</Text>
                  <Textarea
                    name="message"
                    placeholder="¿En qué podemos apoyarte?"
                    borderRadius="xl"
                    borderColor="gray.200"
                    _focus={focusStyle}
                    _placeholder={{ color: 'gray.400' }}
                    rows={4}
                    resize="none"
                    required
                  />
                </Box>

                {/* Feedback */}
                {estado === 'ok' && (
                  <Text fontSize="sm" color="#2EEDAD" fontWeight="600" textAlign="center">
                    ✓ Mensaje enviado correctamente. Te respondemos pronto.
                  </Text>
                )}
                {estado === 'error' && (
                  <Text fontSize="sm" color="red.500" fontWeight="600" textAlign="center">
                    Ocurrió un error al enviar. Inténtalo de nuevo.
                  </Text>
                )}

                <Flex justify="center" pt={1}>
                  <Boton
                    variante="gradiente"
                    size="lg"
                    px={10}
                    type="submit"
                    loading={enviando}
                  >
                    Enviar Mensaje
                  </Boton>
                </Flex>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
