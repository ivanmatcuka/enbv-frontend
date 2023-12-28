'use client';

import { styled } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const Container = styled('div')(({ theme }) => ({
  position: 'relative',

  width: 594,
  height: 285,
  boxSizing: 'border-box',

  background: 'url("/drawing_frame.png") no-repeat',
  backgroundSize: 'contain',

  [theme.breakpoints.down('lg')]: {
    width: 373,
    height: 259,

    backgroundImage: 'url("/drawing_frame_xs.svg")',
  },
}));

const ActionContainer = styled('div')({
  position: 'absolute',
  right: 0,
  bottom: 5,
});

const Title = styled(Typography)({
  transform: 'rotate(-2.47deg)',
});

const StyledImage = styled(Image)(({ theme }) => ({
  position: 'absolute',
  top: 150,
  left: 0,

  [theme.breakpoints.down('lg')]: {
    width: 100,
    height: 90,
  },
}));

type CardProps = {
  title: string;
  body: string;

  action?: ReactNode;
  catPictureUrl?: string;
};
export const Card: FC<CardProps> = ({ title, body, action, catPictureUrl }) => {
  return (
    <Container>
      <Title variant="h2" component="p">
        {title}
      </Title>
      <Typography
        variant="p2"
        component="p"
        pt={1.5}
        pl={{ xs: 12.5, lg: 17.5 }}
      >
        {body}
      </Typography>
      {catPictureUrl && (
        <StyledImage
          alt="icon_letter"
          width={135}
          height={121}
          src={catPictureUrl}
        />
      )}
      {action && <ActionContainer>{action}</ActionContainer>}
    </Container>
  );
};
