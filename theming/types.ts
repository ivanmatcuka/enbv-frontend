import { colors } from './theme/palette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    brand: typeof colors;
  }

  interface PaletteOptions {
    brand: typeof colors;
  }
}
