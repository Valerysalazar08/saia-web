import { Box } from '@chakra-ui/react';
import HeroAyuda from '../components/organisms/ayuda/HeroAyuda';
import Categorias from '../components/organisms/ayuda/Categorias';
import FAQ from '../components/organisms/ayuda/FAQ';
import SoporteDirecto from '../components/organisms/ayuda/SoporteDirecto';

export default function AyudaSoporte() {
  return (
    <Box pt="72px">
      <HeroAyuda />
      <Categorias />
      <FAQ />
      <SoporteDirecto />
    </Box>
  );
}

// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   Input,
//   Grid,
//   AccordionRoot,
//   AccordionItem,
//   AccordionItemTrigger,
//   AccordionItemContent,
//   // Image,
// } from '@chakra-ui/react';
// import {
//   FaUserCircle,
//   FaQrcode,
//   FaShieldAlt,
//   FaMobileAlt,
//   FaTools,
//   FaUniversity,
//   FaEnvelope,
//   FaWhatsapp,
//   FaChevronRight,
// } from 'react-icons/fa';
// import Boton from '../components/atoms/Boton';
// import TextoGradiente from '../components/atoms/TextoGradiente';

// const categorias = [
//   {
//     numero: '01',
//     icono: <FaUserCircle size={22} />,
//     titulo: 'Cuenta y Acceso',
//     descripcion: 'Gestión de contraseñas, actualización de datos personales y solución a problemas de inicio de sesión.',
//   },
//   {
//     numero: '02',
//     icono: <FaQrcode size={22} />,
//     titulo: 'Uso de Códigos QR',
//     descripcion: 'Conoce cómo obtener tu código, qué hacer si no escanea y cómo funciona el QR de seguridad.',
//   },
//   {
//     numero: '03',
//     icono: <FaShieldAlt size={22} />,
//     titulo: 'Seguridad y Privacidad',
//     descripcion: 'Conoce cómo protegemos tus datos y las medidas de seguridad física implementadas en portería.',
//   },
//   {
//     numero: '04',
//     icono: <FaMobileAlt size={22} />,
//     titulo: 'Aplicación Móvil',
//     descripcion: 'Instalación, descarga para Android/iOS, compatibilidad y actualizaciones del sistema.',
//   },
//   {
//     numero: '05',
//     icono: <FaTools size={22} />,
//     titulo: 'Soporte Técnico',
//     descripcion: 'Errores del sistema, fallas en la red y reportes de mal funcionamiento del hardware de ingreso.',
//   },
//   {
//     numero: '06',
//     icono: <FaUniversity size={22} />,
//     titulo: 'Políticas Institucionales',
//     descripcion: 'Normativa vigente sobre el ingreso de aprendices, horarios y protocolos de seguridad física.',
//   },
// ];

// const faqs = [
//   { pregunta: '¿Cómo recupero mi código QR?', respuesta: 'Ingresa a la app SAIA con tu cuenta, ve a "Mi perfil" y selecciona "Regenerar QR". Si no tienes acceso a la app, contacta a soporte.' },
//   { pregunta: '¿Cómo actualizo mis datos personales?', respuesta: 'Desde la app ve a Configuración > Datos personales. Los cambios deben ser aprobados por un administrador.' },
//   { pregunta: '¿Qué hago si el sistema no valida mi ingreso?', respuesta: 'Asegúrate de tener buena iluminación y que el QR esté limpio en pantalla. Si persiste, informa al personal de portería.' },
//   { pregunta: '¿Cuánto tiempo tarda la validación?', respuesta: 'La validación es instantánea, en menos de 2 segundos. Si tarda más, puede ser un problema de red.' },
//   { pregunta: '¿Puedo ingresar sin conexión a internet?', respuesta: 'Sí, el QR funciona de manera offline por un período limitado. Asegúrate de sincronizar la app regularmente.' },
//   { pregunta: '¿A quién contacto si necesito más ayuda?', respuesta: 'Puedes escribirnos al correo soporte@saia.edu.co o contactarnos por WhatsApp al +57 312 345 6789.' },
// ];

// const canales = [
//   {
//     numero: '01',
//     icono: <FaEnvelope size={28} />,
//     titulo: 'Correo electrónico',
//     descripcion: 'Envíanos tu consulta y te responderemos por correo.',
//     cta: 'Ver más',
//     color: '#EA4335',
//   },
//   {
//     numero: '02',
//     icono: <FaWhatsapp size={28} />,
//     titulo: 'Chat',
//     descripcion: 'Facilítanos y te ayudamos de la manera más pronta posible.',
//     cta: 'Ver más',
//     color: '#25D366',
//   },
// ];

// export default function AyudaSoporte() {
//   return (
//     <Box pt="72px">

//       {/* ── Hero búsqueda ── */}
//       <Box bg="#f8fffe" py={{ base: 12, md: 16 }}>
//         <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={6} align="flex-start">
//           <Box>
//             <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="900" color="#0A1628">
//               ¿Cómo podemos{' '}
//               <TextoGradiente fontWeight="900" fontSize={{ base: '2xl', md: '3xl' }}>
//                 ayudarte hoy?
//               </TextoGradiente>
//             </Heading>
//             <Text color="gray.500" fontSize="sm" mt={2}>
//               Encuentra respuestas rápidas y soporte técnico para tu sistema de ingreso automatizado.
//             </Text>
//           </Box>

//           {/* Buscador */}
//           <Flex
//             w="full"
//             maxW="600px"
//             bg="white"
//             borderRadius="full"
//             border="1px solid"
//             borderColor="gray.200"
//             boxShadow="0 2px 12px rgba(0,0,0,0.06)"
//             overflow="hidden"
//             align="center"
//             px={4}
//             gap={3}
//           >
//             <Text color="gray.400" fontSize="sm">🔍</Text>
//             <Input
//               placeholder="Escribe tu duda (ej. Cómo recuperar mi QR de acceso)"
//               border="none"
//               _focus={{ boxShadow: 'none', outline: 'none' }}
//               fontSize="sm"
//               flex={1}
//             />
//             <Boton variante="gradiente" size="sm" px={5} borderRadius="full">
//               Buscar
//             </Boton>
//           </Flex>
//         </VStack>
//       </Box>

//       {/* ── Categorías ── */}
//       <Box bg="white" py={{ base: 14, md: 20 }}>
//         <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={10}>
//           <VStack align="flex-start" gap={1} w="full">
//             <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="900" color="#0A1628">
//               Explora por categorías
//             </Heading>
//             <Text
//               fontSize="xs"
//               fontWeight="700"
//               textTransform="uppercase"
//               letterSpacing="wider"
//               bgGradient="to-r"
//               gradientFrom="#33BEDC"
//               gradientTo="#2EEDAD"
//               bgClip="text"
//             >
//               Selecciona la categoría que mejor se ajuste a tu consulta
//             </Text>
//           </VStack>

//           <Grid
//             templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
//             gap={5}
//             w="full"
//           >
//             {categorias.map((cat) => (
//               <Box
//                 key={cat.numero}
//                 className="step-card"
//                 borderRadius="2xl"
//                 border="1px solid"
//                 borderColor="gray.100"
//                 p={6}
//                 bg="white"
//                 position="relative"
//                 overflow="hidden"
//                 cursor="pointer"
//                 transition="box-shadow 0.25s"
//                 _hover={{ boxShadow: '0 8px 32px rgba(51,190,220,0.15)' }}
//               >
//                 <style>{`
//                   .step-card .step-bubble-help {
//                     position: absolute; top: -30px; right: -30px;
//                     width: 100px; height: 100px; border-radius: 50%;
//                     background: linear-gradient(135deg, #33BEDC, #2EEDAD);
//                     opacity: 0.12;
//                     transition: width .4s ease, height .4s ease, opacity .4s ease, top .4s ease, right .4s ease;
//                     pointer-events: none;
//                   }
//                   .step-card:hover .step-bubble-help {
//                     width: 160px; height: 160px; top: -55px; right: -55px; opacity: 0.28;
//                   }
//                   .step-num-help {
//                     font-size: 2.2rem; font-weight: 900; line-height: 1; color: #e2e8f0;
//                     transition: color .25s;
//                   }
//                   .step-card:hover .step-num-help {
//                     background: linear-gradient(to right, #33BEDC, #2EEDAD);
//                     -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//                     background-clip: text; color: transparent;
//                   }
//                 `}</style>
//                 <div className="step-bubble-help" />

//                 <VStack align="flex-start" gap={4} position="relative" zIndex={1}>
//                   <Flex w="full" justify="space-between" align="flex-start">
//                     <Box
//                       w={11} h={11} borderRadius="xl"
//                       bgGradient="to-br" gradientFrom="#33BEDC" gradientTo="#2EEDAD"
//                       display="flex" alignItems="center" justifyContent="center" color="white"
//                     >
//                       {cat.icono}
//                     </Box>
//                     <div className="step-num-help">{cat.numero}</div>
//                   </Flex>

//                   <VStack align="flex-start" gap={1}>
//                     <Text fontWeight="800" fontSize="sm" color="#0A1628">{cat.titulo}</Text>
//                     <Text fontSize="xs" color="gray.500" lineHeight="tall">{cat.descripcion}</Text>
//                   </VStack>

//                   <HStack gap={1} fontSize="xs" fontWeight="600" color="gray.400"
//                     _groupHover={{ color: '#33BEDC' }} transition="color .2s">
//                     <Text>Ver más</Text>
//                     <FaChevronRight size={10} />
//                   </HStack>
//                 </VStack>
//               </Box>
//             ))}
//           </Grid>
//         </VStack>
//       </Box>

//       {/* ── FAQ ── */}
//       <Box bg="#f8fffe" py={{ base: 14, md: 20 }}>
//         <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={8}>
//           <Flex w="full" justify="space-between" align="center">
//             <VStack align="flex-start" gap={1}>
//               <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="900" color="#0A1628">
//                 Preguntas frecuentes
//               </Heading>
//               <Text
//                 fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="wider"
//                 bgGradient="to-r" gradientFrom="#33BEDC" gradientTo="#2EEDAD" bgClip="text"
//               >
//                 Resuelve tus dudas más comunes de forma rápida
//               </Text>
//             </VStack>
//             <Text
//               fontSize="xs" fontWeight="600" color="#33BEDC" cursor="pointer"
//               _hover={{ opacity: 0.8 }} display={{ base: 'none', md: 'block' }}
//             >
//               Ver todas las preguntas
//             </Text>
//           </Flex>

//           <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} w="full">
//             <AccordionRoot collapsible variant="plain">
//               {faqs.slice(0, 3).map((faq, i) => (
//                 <AccordionItem
//                   key={i}
//                   value={`faq-a-${i}`}
//                   bg="white"
//                   borderRadius="xl"
//                   border="1px solid"
//                   borderColor="gray.100"
//                   mb={3}
//                   px={4}
//                 >
//                   <AccordionItemTrigger fontSize="sm" fontWeight="600" color="#0A1628" py={4}>
//                     {faq.pregunta}
//                   </AccordionItemTrigger>
//                   <AccordionItemContent fontSize="sm" color="gray.500" lineHeight="tall" pb={4}>
//                     {faq.respuesta}
//                   </AccordionItemContent>
//                 </AccordionItem>
//               ))}
//             </AccordionRoot>

//             <AccordionRoot collapsible variant="plain">
//               {faqs.slice(3).map((faq, i) => (
//                 <AccordionItem
//                   key={i}
//                   value={`faq-b-${i}`}
//                   bg="white"
//                   borderRadius="xl"
//                   border="1px solid"
//                   borderColor="gray.100"
//                   mb={3}
//                   px={4}
//                 >
//                   <AccordionItemTrigger fontSize="sm" fontWeight="600" color="#0A1628" py={4}>
//                     {faq.pregunta}
//                   </AccordionItemTrigger>
//                   <AccordionItemContent fontSize="sm" color="gray.500" lineHeight="tall" pb={4}>
//                     {faq.respuesta}
//                   </AccordionItemContent>
//                 </AccordionItem>
//               ))}
//             </AccordionRoot>
//           </Grid>
//         </VStack>
//       </Box>

//       {/* ── Soporte directo ── */}
//       <Box bg="white" py={{ base: 14, md: 20 }}>
//         <VStack maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} gap={8}>
//           <VStack align="flex-start" gap={1} w="full">
//             <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="900" color="#0A1628">
//               Soporte{' '}
//               <TextoGradiente fontWeight="900" fontSize={{ base: 'xl', md: '2xl' }}>
//                 directo:
//               </TextoGradiente>
//             </Heading>
//             <Text fontSize="sm" color="gray.500">
//               Si no encuentras lo que buscas, contáctanos en nuestros canales oficiales.
//             </Text>
//           </VStack>

//           <Flex direction={{ base: 'column', md: 'row' }} gap={5} w="full">
//             {canales.map((canal) => (
//               <Box
//                 key={canal.numero}
//                 flex={1}
//                 bg="white"
//                 borderRadius="2xl"
//                 border="1px solid"
//                 borderColor="gray.100"
//                 p={6}
//                 boxShadow="0 2px 16px rgba(0,0,0,0.05)"
//                 position="relative"
//                 _hover={{ boxShadow: '0 8px 30px rgba(51,190,220,0.12)', transform: 'translateY(-2px)' }}
//                 transition="all 0.25s"
//               >
//                 <Text
//                   position="absolute" top={4} right={5}
//                   fontSize="2.5rem" fontWeight="900" color="gray.100" lineHeight={1}
//                 >
//                   {canal.numero}
//                 </Text>
//                 <VStack align="flex-start" gap={3}>
//                   <Box color={canal.color}>{canal.icono}</Box>
//                   <Text fontWeight="800" fontSize="md" color="#0A1628">{canal.titulo}</Text>
//                   <Text fontSize="sm" color="gray.500" lineHeight="tall">{canal.descripcion}</Text>
//                   <HStack gap={1} fontSize="xs" fontWeight="600" color="#33BEDC" cursor="pointer">
//                     <Text>{canal.cta}</Text>
//                     <FaChevronRight size={10} />
//                   </HStack>
//                 </VStack>
//               </Box>
//             ))}
//           </Flex>
//         </VStack>
//       </Box>

//     </Box>
//   );
// }




