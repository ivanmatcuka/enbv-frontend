'use client';

import { styled } from '@mui/material';
import { FC } from 'react';

const StyledImage = styled('img')({
  marginRight: 10,
});

type CarouselImageProps = {
  alt?: string;
  src: string;
  height?: number | `${number}` | undefined;
};
export const CarouselImage: FC<CarouselImageProps> = ({ alt, height, src }) => (
  <StyledImage alt={alt} height={height} src={src} />
);
