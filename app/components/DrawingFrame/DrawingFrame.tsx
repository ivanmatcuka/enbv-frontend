'use client';

import { Grid, GridProps, styled } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const Frame = styled(Grid)({
  position: 'relative',
});

const StyledImage = styled(Image)({
  position: 'absolute',
  inset: 0,

  width: '100%',
  height: '100%',
});

export const DrawingFrame: FC<GridProps> = ({ children, ...rest }) => (
  <>
    <Frame {...rest}>
      {children}
      <StyledImage
        alt="frame"
        width={300}
        height={300}
        src="/drawing_frame.png"
      />
    </Frame>
  </>
);
