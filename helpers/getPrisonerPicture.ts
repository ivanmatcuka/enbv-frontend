import { Prisoner } from '@/apollo/hooks/usePrisoners';

export const getPrisonerPicture = (prisoner: Prisoner) =>
  prisoner.featuredImage?.node.mediaItemUrl
    ? prisoner.featuredImage.node.mediaItemUrl
    : prisoner.prisonerData?.sex === 'мужской'
    ? '/default_man.png'
    : '/default_woman.png';
