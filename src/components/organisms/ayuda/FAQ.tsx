import {
  Box,
  Flex,
  Grid,
  VStack,
  Text,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from '@chakra-ui/react';
import SeccionHeader from '@/components/molecules/SeccionHeader';

const faqs = [
  {
    pregunta: '¿Cómo recupero mi código QR?',
    respuesta:
      'Ingresa a la app SAIA con tu cuenta, ve a "Mi perfil" y selecciona "Regenerar QR". Si no tienes acceso a la app, contacta a soporte.',
  },
  {
    pregunta: '¿Cómo actualizo mis datos personales?',
    respuesta:
      'Desde la app ve a Configuración > Datos personales. Los cambios deben ser aprobados por un administrador.',
  },
  {
    pregunta: '¿Qué hago si el sistema no valida mi ingreso?',
    respuesta:
      'Asegúrate de tener buena iluminación y que el QR esté limpio en pantalla. Si persiste, informa al personal de portería.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda la validación?',
    respuesta:
      'La validación es instantánea, en menos de 2 segundos. Si tarda más, puede ser un problema de red.',
  },
  {
    pregunta: '¿Puedo ingresar sin conexión a internet?',
    respuesta:
      'Sí, el QR funciona de manera offline por un período limitado. Asegúrate de sincronizar la app regularmente.',
  },
  {
    pregunta: '¿A quién contacto si necesito más ayuda?',
    respuesta:
      'Puedes escribirnos al correo soporte@saia.edu.co o contactarnos por WhatsApp al +57 312 345 6789.',
  },
];

function GrupoFAQ({ items, prefijo }: { items: typeof faqs; prefijo: string }) {
  return (
    <AccordionRoot collapsible variant="plain">
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`${prefijo}-${i}`}
          bg="white"
          borderRadius="xl"
          border="1px solid"
          borderColor="gray.100"
          mb={3}
          px={4}
        >
          <AccordionItemTrigger fontSize="sm" fontWeight="600" color="#0A1628" py={4}>
            {faq.pregunta}
          </AccordionItemTrigger>
          <AccordionItemContent fontSize="sm" color="gray.500" lineHeight="tall" pb={4}>
            {faq.respuesta}
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}

export default function FAQ() {
  return (
    <Box as="section" bg="#f8fffe" py={{ base: 14, md: 20 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={8}>
        <Flex w="full" justify="space-between" align="flex-end">
          <SeccionHeader
            etiqueta="Resuelve tus dudas más comunes de forma rápida"
            titulo="Preguntas frecuentes"
          />
          <Text
            fontSize="xs"
            fontWeight="600"
            color="#33BEDC"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
            display={{ base: 'none', md: 'block' }}
            pb={1}
          >
            Ver todas las preguntas
          </Text>
        </Flex>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} w="full">
          <GrupoFAQ items={faqs.slice(0, 3)} prefijo="a" />
          <GrupoFAQ items={faqs.slice(3)} prefijo="b" />
        </Grid>
      </VStack>
    </Box>
  );
}
