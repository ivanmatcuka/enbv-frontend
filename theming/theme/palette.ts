import { PaletteOptions } from '@mui/material';
import tinycolor from 'tinycolor2';

export const colors = {
  black: '#000000',
  black20: tinycolor.mix('#000000', '#FFFFFF', 20).toRgbString(),
  white: '#FFFFFF',
  bg: '#F8F7F2',
  txt: '#151515',
  red: '#F5545E',
  red20: tinycolor.mix('#F5545E', '#FFFFFF', 20).toRgbString(),
  red40: tinycolor.mix('#F5545E', '#FFFFFF', 40).toRgbString(),
  yellow: '#EFC556',
  yellow20: tinycolor.mix('#EFC556', '#FFFFFF', 20).toRgbString(),
  yellow40: tinycolor.mix('#EFC556', '#FFFFFF', 40).toRgbString(),
  green: '#3E4137',
};

export const palette: PaletteOptions = {
  brand: colors,
};

export type PaletteColors = keyof typeof colors;
