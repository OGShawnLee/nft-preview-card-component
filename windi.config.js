import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    colors: {
      cyan: {
        500: 'hsl(178, 100%, 50%)',
      },
      blue: {
        300: 'hsl(215, 51%, 70%)',
        700: 'hsl(215, 32%, 27%)',
        800: 'hsl(216, 50%, 16%)',
        900: 'hsl(217, 54%, 11%)',
      },
      white: '#FFFFFF',
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
  },
});
