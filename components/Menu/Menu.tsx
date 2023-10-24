import React, { FC } from 'react';
import {
  styled,
  List as MUIList,
  ListItem as MUIListItem,
  ListItemText as MUIListItemText,
  ListItemIcon as MUIListItemIcon,
} from '@mui/material';

import { Arrow } from '../Arrow/Arrow';

const StyledMUIList = styled(MUIList)({
  li: {
    padding: 0,
  },
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
      {items.map((item) => (
        <MUIListItem>
          <MUIListItemIcon>
            <Arrow />
          </MUIListItemIcon>
          <MUIListItemText>{item.label}</MUIListItemText>
        </MUIListItem>
      ))}
    </StyledMUIList>
  );
};
