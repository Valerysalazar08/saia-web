import { useState, useRef } from 'react';
import { Box, Flex, Heading, Text, Input, VStack } from '@chakra-ui/react';
import { FaSearch, FaQuestionCircle, FaTh } from 'react-icons/fa';
import Boton from '@/components/atoms/Boton';
import TextoGradiente from '@/components/atoms/TextoGradiente';
import { faqs, categorias } from '@/data/ayuda';

interface Resultado {
  tipo: 'faq' | 'categoria';
  titulo: string;
  descripcion: string;
}

function buscar(query: string): Resultado[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const resultadosFaq: Resultado[] = faqs
    .filter((f) => f.pregunta.toLowerCase().includes(q) || f.respuesta.toLowerCase().includes(q))
    .slice(0, 4)
    .map((f) => ({ tipo: 'faq', titulo: f.pregunta, descripcion: f.respuesta }));

  const resultadosCat: Resultado[] = categorias
    .filter((c) => c.titulo.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q))
    .slice(0, 2)
    .map((c) => ({ tipo: 'categoria', titulo: c.titulo, descripcion: c.descripcion }));

  return [...resultadosFaq, ...resultadosCat];
}

export default function HeroAyuda() {
  const [query, setQuery] = useState('');
  const [abierto, setAbierto] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const resultados = buscar(query);
  const mostrarDropdown = abierto && query.trim().length > 1;

  return (
    <Box bg="#f8fffe" py={{ base: 12, md: 16 }}>
      <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={6} align="flex-start">
        <Box>
          <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="#0A1628">
            ¿Cómo podemos{' '}
            <TextoGradiente fontWeight="900" fontSize={{ base: '2xl', md: '3xl' }}>
              ayudarte hoy?
            </TextoGradiente>
          </Heading>
          <Text color="gray.500" fontSize="sm" mt={2}>
            Encuentra respuestas rápidas y soporte técnico para tu sistema de ingreso automatizado.
          </Text>
        </Box>

        {/* Buscador con dropdown */}
        <Box w="full" maxW="600px" position="relative">
          <Flex
            bg="white"
            borderRadius={mostrarDropdown ? '2xl 2xl 0 0' : 'full'}
            border="1px solid"
            borderColor={mostrarDropdown ? '#33BEDC' : 'gray.200'}
            borderBottom={mostrarDropdown ? 'none' : undefined}
            boxShadow={mostrarDropdown ? '0 0 0 1px #33BEDC' : '0 2px 12px rgba(0,0,0,0.06)'}
            align="center"
            px={4}
            gap={3}
            transition="all 0.2s"
          >
            <Box color="gray.400" flexShrink={0}>
              <FaSearch size={14} />
            </Box>
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setAbierto(true)}
              onBlur={() => setTimeout(() => setAbierto(false), 150)}
              placeholder="Escribe tu duda (ej. Cómo recuperar mi QR)"
              border="none"
              _focus={{ boxShadow: 'none', outline: 'none' }}
              fontSize="sm"
              flex={1}
              h="44px"
            />
            {query && (
              <Box
                color="gray.400"
                cursor="pointer"
                fontSize="xs"
                onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                _hover={{ color: 'gray.600' }}
                flexShrink={0}
              >
                ✕
              </Box>
            )}
            <Boton
              variante="gradiente"
              size="sm"
              px={5}
              borderRadius="full"
              flexShrink={0}
              onClick={() => setAbierto(true)}
            >
              Buscar
            </Boton>
          </Flex>
          {/* Dropdown de resultados */}
          {mostrarDropdown && (
            <Box
              position="absolute"
              top="100%"
              left={0}
              right={0}
              bg="white"
              border="1px solid"
              borderColor="#33BEDC"
              borderTop="none"
              borderRadius="0 0 2xl 2xl"
              boxShadow="0 8px 24px rgba(51,190,220,0.15)"
              zIndex={50}
              overflow="hidden"
            >
              {resultados.length === 0 ? (
                <Box px={5} py={4}>
                  <Text fontSize="sm" color="gray.400">
                    No encontramos resultados para "{query}"
                  </Text>
                </Box>
              ) : (
                <VStack align="stretch" gap={0} divideY="1px">
                  {resultados.map((r, i) => (
                    <Flex
                      key={i}
                      px={5}
                      py={3}
                      gap={3}
                      align="flex-start"
                      cursor="pointer"
                      _hover={{ bg: 'rgba(51,190,220,0.05)' }}
                      transition="bg 0.15s"
                    >
                      <Box
                        mt="2px"
                        color={r.tipo === 'faq' ? '#33BEDC' : '#2EEDAD'}
                        flexShrink={0}
                      >
                        {r.tipo === 'faq' ? <FaQuestionCircle size={14} /> : <FaTh size={14} />}
                      </Box>
                      <Box>
                        <Text fontSize="sm" fontWeight="600" color="#0A1628" lineHeight="short">
                          {r.titulo}
                        </Text>
                        <Text fontSize="xs" color="gray.500" lineHeight="tall"
                          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {r.descripcion}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </VStack>
              )}
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  );
}
