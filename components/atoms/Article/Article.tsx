'use client';

import {
  Chip as MUIChip,
  ChipProps as MUIChipProps,
  styled,
} from '@mui/material';
import { FC } from 'react';

const StyledChip = styled(MUIChip)(({ theme }) => ({
  height: 23,
  padding: '1px 0',

  ...theme.typography.caption,
}));

export const Article: FC<Pick<MUIChipProps, 'label'>> = (props) => (
  <StyledChip {...props} variant="outlined" />
);
