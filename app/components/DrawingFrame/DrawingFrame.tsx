'use client';

import { Grid, GridProps, styled } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

const FRAME_RATIOS = {
  horizontal: 8 / 7,
  vertical: 7 / 8,
  horizontal_long: 7 / 3,
  vertical_long: 3 / 7,
  default: 1,
};

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
  const [frameImage, setFrameImage] = useState('default');

  useEffect(() => {
    const target = containerRef.current;

    if (!target) return;

    const ro = new ResizeObserver(() => {
      if (!containerRef.current) return;

      const { scrollHeight, scrollWidth } = containerRef.current;
      const ratio = scrollWidth / scrollHeight;

      const diffs = Object.entries(FRAME_RATIOS)
        .map(([key, value]) => [key, Math.abs(ratio - value)] as const)
        .sort((a, b) => +a[1] - +b[1]);

      setFrameImage(diffs[0][0]);
    });

    ro.observe(target);

    return () => {
      target && ro.unobserve(target);
    };
  }, []);

  return (
    <Container {...rest} ref={containerRef}>
      {children}
      <FrameImage
        alt="frame"
        width={300}
        height={300}
        src={`/images/frames/frame_${frameImage}.png`}
      />
    </Container>
  );
};
