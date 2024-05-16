'use client';

import { Typography, styled } from '@mui/material';

export const ProfileImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 100,

  filter: 'drop-shadow(4px 4px 0px #000000)',

  [theme.breakpoints.down('lg')]: {
    position: 'static',
  },
}));

export const EmptyProfileImageContainer = styled(ProfileImageContainer)({
  filter: 'none',
});

export const ProfileImage = styled('img')(({ theme }) => ({
  objectFit: 'cover',

  clipPath: 'polygon(98% 0, 100% 74%, 96% 100%, 0 97%, 4% 0)',

  [theme.breakpoints.down('lg')]: {
    width: 184,
    height: 188,
  },
}));

export const EmptyProfileImage = styled(ProfileImage)({
  clipPath: 'none',
});

export const DescriptionLayout = styled(Typography)({
  p: {
    '&:first-of-type': {
      marginTop: 0,
    },
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
});
