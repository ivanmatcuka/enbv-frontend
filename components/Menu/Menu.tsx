import React, { FC } from 'react';
import {
  List as MUIList,
  ListItem as MUIListItem,
  ListItemText as MUIListItemText,
  ListItemProps as MUIListItemProps,
} from '@mui/material';

type Item = {
  label: string;
} & Pick<MUIListItemProps, 'onClick'>;

type MenuProps = {
  items: Item[];
};
export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <MUIList>
      {items.map((item) => (
        <MUIListItem>
          <MUIListItemText>{item.label}</MUIListItemText>
        </MUIListItem>
      ))}
    </MUIList>
  );
};
