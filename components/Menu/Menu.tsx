import React, { FC } from 'react';
import {
  styled,
  List as MUIList,
  ListItem as MUIListItem,
  ListItemText as MUIListItemText,
  ListItemIcon as MUIListItemIcon,
} from '@mui/material';

import { Arrow } from '../Arrow/Arrow';

const StyledMUIList = styled(MUIList)(({ theme }) => {
  return {
    li: {
      padding: 0,
    },
    'li, .MuiListItemIcon-root svg': {
      '&:hover': {
        color: theme.palette.brand.yellow20,
        cursor: 'pointer',
      },

      '&:active': {
        color: theme.palette.brand.yellow40,
      },
    },
  };
});

type Item = {
  label: string;
};

type MenuProps = {
  items: Item[];
};
export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <StyledMUIList>
      {items.map((item, index) => (
        <MUIListItem key={index}>
          <MUIListItemIcon>
            <Arrow />
          </MUIListItemIcon>
          <MUIListItemText>{item.label}</MUIListItemText>
        </MUIListItem>
      ))}
    </StyledMUIList>
  );
};
