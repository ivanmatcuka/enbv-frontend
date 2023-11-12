'use client';

import { FC, PropsWithChildren } from 'react';
import Slider from 'react-slick';

export const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const settings = {
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

  return <Slider {...settings}>{children}</Slider>;
};
