'use client';

import { Grid, GridProps, styled } from '@mui/material';
import Image from 'next/image';
import { FC, RefObject, useEffect, useRef, useState } from 'react';

const FRAME_RATIOS = {
  'horizontal.svg': 8 / 7,
  'vertical.svg': 7 / 8,
  'horizontal_long.svg': 7 / 3,
  'vertical_long.svg': 3 / 7,
  'default.svg': 1,
};

const useDrawingFrameRatio = (containerRef: RefObject<HTMLDivElement>) => {
  const [frameImage, setFrameImage] = useState('default');

  // I realize how much of an overkill this is
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

    console.log(frameImage);

    return () => {
      target && ro.unobserve(target);
    };
  }, [containerRef, frameImage]);

  return frameImage;
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
  const frameImage = useDrawingFrameRatio(containerRef);

  return (
    <Container {...rest} ref={containerRef}>
      {children}
      <FrameImage
        alt="frame"
        width={300}
        height={300}
        src={`/images/frames/frame_${frameImage}`}
      />
    </Container>
  );
};
