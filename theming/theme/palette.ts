import { mix } from 'tinycolor2';

export const palette = {
  black: '#000000',
  white: '#FFFFFF',
  bg: '#F8F7F2',
  txt: '#151515',
  red: '#F5545E',
  red20: mix('#F5545E', '#FFFFFF', 20).toRgb(),
  red40: mix('#F5545E', '#FFFFFF', 40).toRgb(),
  yellow: '#EFC556',
  yellow20: mix('#EFC556', '#FFFFFF', 20).toRgb(),
  yellow40: mix('#F5545E66', '#FFFFFF', 40).toRgb(),
  green: '#3E4137',
};

export type Colors = keyof typeof palette;
