import { Button, type ButtonProps } from '@chakra-ui/react';

type Variante = 'gradiente' | 'outline' | 'blanco';

interface BotonProps extends Omit<ButtonProps, 'variant'> {
  /**
   * gradiente — fondo #33BEDC→#2EEDAD, texto blanco (uso general)
   * outline   — borde blanco, texto blanco (sobre fondos de gradiente)
   * blanco    — fondo blanco, texto #2EEDAD (botón secundario en navbar)
   */
  variante?: Variante;
}

const estilos: Record<Variante, ButtonProps> = {
  gradiente: {
    bgGradient: 'to-r',
    gradientFrom: '#33BEDC',
    gradientTo: '#2EEDAD',
    color: 'white',
    _hover: { filter: 'brightness(0.88)', transform: 'translateY(-1px)' },
  },
  outline: {
    variant: 'outline',
    borderColor: 'white',
    color: 'white',
    _hover: { bg: 'rgba(255,255,255,0.15)' },
  },
  blanco: {
    bg: 'white',
    color: '#2EEDAD',
    _hover: { bg: 'whiteAlpha.900', transform: 'translateY(-1px)' },
  },
};

export default function Boton({
  variante = 'gradiente',
  children,
  ...props
}: BotonProps) {
  return (
    <Button
      borderRadius="full"
      fontWeight="700"
      transition="all 0.2s"
      {...estilos[variante]}
      {...props}
    >
      {children}
    </Button>
  );
}
