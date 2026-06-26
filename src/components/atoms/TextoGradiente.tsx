import { Text, type TextProps } from '@chakra-ui/react';

interface TextoGradienteProps extends TextProps {
  children: React.ReactNode;
}

/**
 * Texto con gradiente de marca #33BEDC → #2EEDAD.
 * Acepta todos los props de Text (fontSize, fontWeight, as, etc.)
 */
export default function TextoGradiente({ children, ...props }: TextoGradienteProps) {
  return (
    <Text
      as="span"
      bgGradient="to-r"
      gradientFrom="#33BEDC"
      gradientTo="#2EEDAD"
      bgClip="text"
      {...props}
    >
      {children}
    </Text>
  );
}
