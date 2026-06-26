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
        body: { value: "'Work Sans', sans-serif" },
        mono: { value: "'Work Sans', sans-serif" },
      },
      colors: {
        brand: {
          blue: { value: '#33BEDC' },
          green: { value: '#2EEDAD' },
          dark: { value: '#0A1628' },
          darkAlt: { value: '#0D1F3C' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
