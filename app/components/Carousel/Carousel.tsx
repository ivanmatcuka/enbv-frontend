'use client';

import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Slider, { Settings } from 'react-slick';

const Container = styled('div')({
  position: 'absolute',

  left: 0,
  right: 0,
});

export const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    variableWidth: true,
  };

  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};
