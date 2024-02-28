'use client';

import { Grid, GridProps, styled } from '@mui/material';
import Image from 'next/image';
import { FC, useRef } from 'react';

const Container = styled(Grid)({
  position: 'relative',
});

const FrameImage = styled(Image)({
  position: 'absolute',
  inset: 0,
  zIndex: -1,

  width: '100%',
  height: '100%',
});

export const DrawingFrame: FC<GridProps> = ({ children, ...rest }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container {...rest} ref={containerRef}>
      {children}
      <FrameImage
        alt="frame"
        width={300}
        height={300}
        src="/images/frames/frame_default.svg"
      />
    </Container>
  );
};
