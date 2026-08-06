import { Box, Flex, HStack, Text, Image } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '@/assets/icons/logoblanco.svg';

const navLinks = [
  { label: 'Inicio',          to: '/' },
  { label: 'Sobre nosotros',  to: '/nosotros' },
  { label: 'Ayuda y Soporte', to: '/ayuda' },
  { label: 'Tutoriales',      to: '/ayuda#tutoriales' },
  { label: 'Contacto',        to: '/#contacto' },
];

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <RouterLink to={to}>
      <Box position="relative" py={1}>
        <Text
          fontSize="sm"
          fontWeight="600"
          color="white"
          opacity={active ? 1 : 0.8}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s"
          letterSpacing="wide"
          whiteSpace="nowrap"
        >
          {label}
        </Text>
        {/* Línea activa animada */}
        <Box
          position="absolute"
          bottom={0}
          left="50%"
          transform="translateX(-50%)"
          w={active ? '100%' : '0%'}
          h="2px"
          borderRadius="full"
          bg="white"
          transition="width 0.25s ease"
        />
      </Box>
    </RouterLink>
  );
}

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
      py={4}
      boxShadow="0 2px 20px rgba(51,190,220,0.25)"
    >
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">

        {/* Logo */}
        <RouterLink to="/">
          <HStack gap={2.5}>
            <Image src={logo} alt="Logo SAIA" boxSize="36px" />
            <Text
              fontWeight="900"
              fontSize="xl"
              color="white"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              SAIA
            </Text>
          </HStack>
        </RouterLink>

        {/* Links */}
        <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              active={pathname === link.to}
            />
          ))}
        </HStack>

        {/* Espacio para balance visual */}
        <Box w="100px" display={{ base: 'none', md: 'block' }} />
      </Flex>
    </Box>
  );
}
