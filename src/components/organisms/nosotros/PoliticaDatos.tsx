import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  List,
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  DialogBackdrop,
  DialogPositioner,
} from '@chakra-ui/react';
import Boton from '@/components/atoms/Boton';
import tratamdatos from '@/assets/images/tratamdatos.svg';

function Seccion({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <VStack align="flex-start" gap={2}>
      <Text fontWeight="800" fontSize="sm" color="#0A1628">
        {titulo}
      </Text>
      {children}
    </VStack>
  );
}

function Parrafo({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="sm" color="gray.600" lineHeight="tall">
      {children}
    </Text>
  );
}

export default function PoliticaDatos() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sección */}
      <Box as="section" id="politica" position="relative" overflow="hidden" minH={{ base: '340px', md: '400px' }}>
        {/* Imagen de fondo */}
        <Box
          position="absolute"
          inset={0}
          backgroundImage={`url(${tratamdatos})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
        {/* Overlay */}
        <Box position="absolute" inset={0} bg="rgba(5, 30, 50, 0.55)" />

        {/* Contenido */}
        <Flex
          position="relative"
          zIndex={1}
          maxW="1200px"
          mx="auto"
          px={{ base: 6, md: 10 }}
          minH={{ base: '340px', md: '400px' }}
          align="center"
          justify="flex-end"
        >
          <VStack align="flex-start" gap={5} maxW={{ base: '100%', md: '480px' }}>
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="white" lineHeight="shorter">
              Política de Tratamiento de Datos
            </Heading>
            <Text color="whiteAlpha.900" fontSize="sm" lineHeight="tall">
              En SAIA, protegemos la información de nuestros aprendices y
              garantizamos un tratamiento de datos responsable, seguro y
              transparente, conforme a la normativa vigente sobre protección
              de datos personales en Colombia.
            </Text>
            <Boton variante="outline" size="md" px={7} onClick={() => setOpen(true)}>
              Conoce nuestra política →
            </Boton>
          </VStack>
        </Flex>
      </Box>

      {/* Modal */}
      <DialogRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size="lg"
        scrollBehavior="inside"
      >
        <DialogBackdrop bg="blackAlpha.700" />
        <DialogPositioner>
          <DialogContent
            borderRadius="2xl"
            mx={{ base: 4, md: 'auto' }}
            maxH="80vh"
            maxW="600px"
            w="full"
          >
          <DialogHeader borderBottom="1px solid" borderColor="gray.100" pb={4}>
            <Heading fontSize="lg" fontWeight="900" color="#0A1628">
              Política de Tratamiento de Datos Personales
            </Heading>
          </DialogHeader>

          {/* Body con scroll */}
          <DialogBody overflowY="auto" py={6}>
            <VStack align="flex-start" gap={6}>

              <Parrafo>
                En SAIA reconocemos la importancia de proteger la información personal
                de los aprendices y garantizar un tratamiento responsable, seguro y
                transparente de los datos recopilados dentro del sistema de control de
                acceso de la sede Salomia del SENA.
              </Parrafo>

              <Parrafo>
                La recolección y tratamiento de datos personales se realiza conforme a
                la legislación colombiana vigente, especialmente la Ley 1581 de 2012,
                el Decreto 1377 de 2013 y demás normas relacionadas con la protección
                de datos personales y el derecho fundamental al hábeas data.
              </Parrafo>

              <Seccion titulo="Información que recopilamos">
                <Parrafo>El sistema podrá recopilar información relacionada con:</Parrafo>
                <List.Root gap={1} pl={4}>
                  {[
                    'Nombre completo del aprendiz.',
                    'Documento de identidad.',
                    'Código QR institucional.',
                    'Número de ficha.',
                    'Registros de ingreso y salida.',
                    'Fecha y hora de acceso.',
                    'Información relacionada con insumos o dispositivos autorizados.',
                  ].map((item) => (
                    <List.Item key={item} fontSize="sm" color="gray.600">
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </Seccion>

              <Seccion titulo="Finalidad del tratamiento de datos">
                <Parrafo>Los datos personales recolectados serán utilizados únicamente para:</Parrafo>
                <List.Root gap={1} pl={4}>
                  {[
                    'Validar la identidad de los aprendices.',
                    'Gestionar el control de acceso institucional.',
                    'Registrar ingresos y salidas.',
                    'Fortalecer la seguridad dentro de la sede.',
                    'Generar trazabilidad y registros históricos.',
                    'Prevenir accesos no autorizados o suplantaciones.',
                    'Optimizar procesos administrativos y de vigilancia.',
                  ].map((item) => (
                    <List.Item key={item} fontSize="sm" color="gray.600">
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </Seccion>

              <Seccion titulo="Protección de la información">
                <Parrafo>
                  SAIA implementa medidas de seguridad técnicas, administrativas y
                  digitales orientadas a proteger la confidencialidad, integridad y
                  disponibilidad de la información almacenada en el sistema.
                </Parrafo>
                <Parrafo>
                  El acceso a los datos se encuentra restringido únicamente al personal
                  autorizado y bajo los lineamientos institucionales establecidos por el
                  SENA y las normas nacionales de protección de datos.
                </Parrafo>
              </Seccion>

              <Seccion titulo="Derechos del titular de los datos">
                <Parrafo>Los titulares de la información podrán:</Parrafo>
                <List.Root gap={1} pl={4}>
                  {[
                    'Conocer los datos almacenados sobre ellos.',
                    'Solicitar actualización o corrección de información.',
                    'Solicitar eliminación de datos cuando sea procedente.',
                    'Revocar la autorización del tratamiento de datos.',
                    'Presentar consultas o reclamos relacionados con el manejo de su información.',
                  ].map((item) => (
                    <List.Item key={item} fontSize="sm" color="gray.600">
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </Seccion>

              <Seccion titulo="Tratamiento de datos de menores de edad">
                <Parrafo>
                  En caso de tratar información de menores de edad, el sistema garantizará
                  el cumplimiento de las disposiciones constitucionales y legales aplicables,
                  asegurando la protección especial de sus derechos fundamentales y el
                  consentimiento correspondiente de sus representantes legales cuando sea requerido.
                </Parrafo>
              </Seccion>

              <Seccion titulo="Uso responsable de la información">
                <Parrafo>
                  SAIA no comercializa, distribuye ni comparte información personal con
                  terceros no autorizados. Toda la información recopilada será utilizada
                  exclusivamente con fines institucionales, académicos y de seguridad.
                </Parrafo>
              </Seccion>

              <Seccion titulo="Aceptación de la política">
                <Parrafo>
                  El uso del sistema implica el conocimiento y aceptación de esta Política
                  de Tratamiento de Datos Personales por parte de los usuarios autorizados.
                </Parrafo>
              </Seccion>

              <Text fontSize="xs" color="gray.400" fontStyle="italic">
                Última actualización: 2026
              </Text>
            </VStack>
          </DialogBody>

          <DialogFooter borderTop="1px solid" borderColor="gray.100" pt={4} justifyContent="center">
            <Boton variante="gradiente" size="md" px={6} onClick={() => setOpen(false)}>
              Entendido
            </Boton>
          </DialogFooter>

          <DialogCloseTrigger />
        </DialogContent>
        </DialogPositioner>
      </DialogRoot>
    </>
  );
}
