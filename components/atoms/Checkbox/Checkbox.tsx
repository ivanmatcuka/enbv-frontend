'use client';

import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  styled,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const StyledCheckbox = styled(MUICheckbox)(({ theme }) => ({
  width: 20,
  height: 20,

  color: theme.palette.brand.black20,

  '&:hover': {
    color: theme.palette.brand.black,
  },

  '&.Mui-disabled': {
    color: theme.palette.brand.grey,
  },
}));

export const Checkbox: FC<PropsWithChildren<MUICheckboxProps>> = ({
  ...rest
}) => <StyledCheckbox color="default" {...rest} />;
