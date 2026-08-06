import { useState } from 'react';
import { Box, Flex, Grid, VStack, Text, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '@chakra-ui/react';
import SeccionHeader from '@/components/molecules/SeccionHeader';
import { faqs } from '@/data/ayuda';

const VISIBLE_POR_DEFECTO = 6;

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
  const [verTodas, setVerTodas] = useState(false);

  const visibles = verTodas ? faqs : faqs.slice(0, VISIBLE_POR_DEFECTO);
  const mitad = Math.ceil(visibles.length / 2);

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
            onClick={() => setVerTodas((v) => !v)}
          >
            {verTodas ? 'Ver menos preguntas ↑' : 'Ver todas las preguntas →'}
          </Text>
        </Flex>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} w="full">
          <GrupoFAQ items={visibles.slice(0, mitad)} prefijo="a" />
          <GrupoFAQ items={visibles.slice(mitad)} prefijo="b" />
        </Grid>

        {/* Botón móvil */}
        <Text
          fontSize="xs"
          fontWeight="600"
          color="#33BEDC"
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          display={{ base: 'block', md: 'none' }}
          onClick={() => setVerTodas((v) => !v)}
        >
          {verTodas ? 'Ver menos ↑' : 'Ver todas las preguntas →'}
        </Text>
      </VStack>
    </Box>
  );
}
