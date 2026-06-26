import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/images/logoblanco.svg';
import Boton from '../atoms/Boton';

const helpLinks = ['Documentación', 'Tutoriales', 'Centro de ayuda', 'Contacto'];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bgGradient="to-r"
      gradientFrom="#33BEDC"
      gradientTo="#2EEDAD"
      px={{ base: 4, md: 10 }}
      py={3}
      boxShadow="0 2px 20px rgba(51,190,220,0.3)"
    >
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">

        {/* Logo */}
        <RouterLink to="/">
          <HStack gap={2}>
            <Image src={logo} alt="Logo SAIA" boxSize="38px" />
            <Text fontWeight="800" fontSize="xl" color="white" letterSpacing="wider">
              SAIA
            </Text>
          </HStack>
        </RouterLink>

        {/* Nav links */}
        <HStack gap={7} display={{ base: 'none', md: 'flex' }}>
          <RouterLink to="/">
            <Text
              fontSize="sm"
              fontWeight="600"
              color="white"
              opacity={pathname === '/' ? 1 : 0.85}
              _hover={{ opacity: 1 }}
              transition="opacity 0.2s"
              textDecoration={pathname === '/' ? 'underline' : 'none'}
              textUnderlineOffset="4px"
            >
              Inicio
            </Text>
          </RouterLink>

          {/* Ayuda y Soporte dropdown */}
          <MenuRoot>
            <MenuTrigger asChild>
              <HStack gap={1} cursor="pointer" color="white" _hover={{ opacity: 0.85 }} transition="opacity 0.2s">
                <Text fontSize="sm" fontWeight="600">Ayuda y Soporte</Text>
                <FaChevronDown size={11} />
              </HStack>
            </MenuTrigger>
            <MenuContent
              bg="white"
              border="none"
              boxShadow="0 8px 30px rgba(0,0,0,0.12)"
              borderRadius="xl"
              py={2}
              minW="180px"
            >
              {helpLinks.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                  fontSize="sm"
                  color="#0A1628"
                  fontWeight="500"
                  _hover={{ bg: 'rgba(51,190,220,0.08)', color: '#33BEDC' }}
                  borderRadius="lg"
                  mx={1}
                  px={4}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuContent>
          </MenuRoot>

          {/* Sobre nosotros */}
          <RouterLink to="/nosotros">
            <Text
              fontSize="sm"
              fontWeight="600"
              color="white"
              opacity={pathname === '/nosotros' ? 1 : 0.85}
              _hover={{ opacity: 1 }}
              transition="opacity 0.2s"
              textDecoration={pathname === '/nosotros' ? 'underline' : 'none'}
              textUnderlineOffset="4px"
            >
              Sobre nosotros
            </Text>
          </RouterLink>
        </HStack>

        {/* Action buttons */}
        <HStack gap={3}>
          <Boton variante="outline" size="sm" px={5}>
            Ingresar
          </Boton>
          <Boton variante="blanco" size="sm" px={5}>
            Registrarme →
          </Boton>
        </HStack>
      </Flex>
    </Box>
  );
}
