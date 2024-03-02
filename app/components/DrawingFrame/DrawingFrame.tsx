'use client';

import { Grid, GridProps, styled } from '@mui/material';
import { FC, useRef } from 'react';

const Container = styled(Grid)({
  position: 'relative',
  borderImageSource: `url("/images/frames/frame_default.svg")`,
  borderImageSlice: 50,
  borderImageWidth: 5,
  borderStyle: 'solid',
});

export const DrawingFrame: FC<GridProps> = ({ children, ...rest }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container {...rest} ref={containerRef}>
      {children}
    </Container>
  );
};
