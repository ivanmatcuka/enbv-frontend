import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  styled,
} from '@mui/material';
import { FC } from 'react';

const StyledMUIButton = styled(MUIButton)(({ theme }) => ({
  padding: 0,

  '&:hover, &:hover .MuiListItemIcon-root': {
    color: theme.palette.brand.yellow,
    cursor: 'pointer',
  },
  '&:active, &:active .MuiListItemIcon-root': {
    color: theme.palette.brand.yellow20,
  },
}));

type MenuProps = Pick<MUIButtonProps, 'variant' | 'children'>;
export const Menu: FC<MenuProps> = ({ ...rest }) => {
  return <StyledMUIButton {...rest} />;
};
