import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { theme } from './theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
