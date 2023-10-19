// import { CSSProperties } from 'react';

import { CSSProperties } from '@mui/material/styles/createTypography';

export const typography: Record<string, CSSProperties> = {
  h1: {
    fontFamily: 'Unbounded',
    fontSize: 70,
    lineHeight: 0.85,

    ['@media (max-width: 600px)']: {
      fontSize: 50,
    },
  },
  h2: {
    fontFamily: 'Unbounded',
    fontSize: 28,
  },
  h3: {
    fontFamily: 'Unbounded',
    fontSize: 22,
    lineHeight: 1,
  },

  subtitle1: {
    fontFamily: 'Nunito Sans',
    fontSize: 24,

    ['@media (max-width: 600px)']: {
      fontSize: 20,
    },
  },

  p1: {
    fontFamily: 'Nunito Sans',
    fontSize: 28,
  },
  p2: {
    fontFamily: 'Nunito Sans',
    fontSize: 22,

    ['@media (max-width: 600px)']: {
      fontSize: 18,
    },
  },
  p3: {
    fontFamily: 'Nunito Sans',
    fontSize: 18,
  },

  mi: {
    fontFamily: 'Nunito Sans',
    fontSize: 18,

    ['@media (max-width: 600px)']: {
      fontSize: 14,
    },
  },
  button: {
    fontFamily: 'Nunito Sans',
    fontSize: 16,
    lineHeight: 1,
  },
  legend: {
    fontFamily: 'Noteworthy',
    fontSize: 16,
  },
  caption: {
    fontFamily: 'Nunito Sans',
    fontSize: 14,
  },
};

export type TypographyVariants = keyof typeof typography;
