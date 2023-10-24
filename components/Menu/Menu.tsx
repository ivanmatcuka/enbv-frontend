'use client';

import {
  List as MUIList,
  ListItem as MUIListItem,
  ListItemIcon as MUIListItemIcon,
  ListItemText as MUIListItemText,
  styled,
} from '@mui/material';
import { FC } from 'react';

import { Arrow } from '../Arrow/Arrow';
import { Typography } from '../Typography/Typography';

const StyledMUIListItem = styled(MUIListItem)(({ theme }) => ({
  padding: 0,

  '&:hover, &:hover .MuiListItemIcon-root': {
    color: theme.palette.brand.yellow,
    cursor: 'pointer',
  },
  '&:active, &:active .MuiListItemIcon-root': {
    color: theme.palette.brand.yellow20,
  },
}));

const StyledMUIListItemIcon = styled(MUIListItemIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),

  minWidth: 'unset',
}));

const StyledMUIListItemText = styled(MUIListItemText)({
  margin: 0,
});

type Item = {
  label: string;
};

type MenuProps = {
  items: Item[];
};
export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <MUIList>
      {items.map((item, index) => (
        <StyledMUIListItem key={index}>
          <StyledMUIListItemIcon>
            <Arrow fill="currentColor" />
          </StyledMUIListItemIcon>
          <StyledMUIListItemText>
            <Typography variant="mi">{item.label}</Typography>
          </StyledMUIListItemText>
        </StyledMUIListItem>
      ))}
    </MUIList>
  );
};
