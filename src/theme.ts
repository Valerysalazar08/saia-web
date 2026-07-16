import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body': {
      fontFamily: "'Work Sans', sans-serif",
    },
    '*': {
      fontFamily: "'Work Sans', sans-serif",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Work Sans', sans-serif" },
        body:    { value: "'Work Sans', sans-serif" },
        mono:    { value: "'Work Sans', sans-serif" },
      },
      colors: {
        brand: {
          // Colores principales del gradiente
          blue:    { value: '#33BEDC' },
          green:   { value: '#2EEDAD' },
          // Fondos
          dark:    { value: '#0A1628' },
          darkAlt: { value: '#0D1F3C' },
          light:   { value: '#f8fffe' },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Atajos semánticos usables como prop de Chakra
        'brand.gradient.from': { value: '#33BEDC' },
        'brand.gradient.to':   { value: '#2EEDAD' },
        'text.primary':        { value: '#0A1628' },
        'text.secondary':      { value: '{colors.gray.500}' },
        'bg.section':          { value: '#f8fffe' },
        'bg.dark':             { value: '#0A1628' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
