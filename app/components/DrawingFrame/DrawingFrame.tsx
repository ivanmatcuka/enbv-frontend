'use client';

import { Grid, GridProps, styled } from '@mui/material';
import { FC } from 'react';

const Frame = styled(Grid)({
  position: 'relative',

  '&:after': {
    content: '""',

    position: 'absolute',
    inset: 0,

    backgroundImage: 'url("/drawing_frame.svg")',
  },
});

export const DrawingFrame: FC<GridProps> = (props) => <Frame {...props} />;
