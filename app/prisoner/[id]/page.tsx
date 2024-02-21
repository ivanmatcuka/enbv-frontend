'use client';

import { Grid, styled } from '@mui/material';
import moment from 'moment';

import { Cards } from '@/app/components/Cards/Cards';
import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import Scroll from '@/app/components/Scroll/Scroll';
import { Article } from '@/components/atoms/Article/Article';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

const ProfileImage = styled('img')({
  position: 'absolute',
  zIndex: 100,

  inset: 0,

  objectFit: 'cover',
});

export default function Prisoner({ params }: { params: { id: string } }) {
  const { data } = usePrisoner(params.id);

  const pd = data?.prisoner?.prisonerData;

  const birthday = pd?.birthdate ? moment(pd.birthdate) : null;
  const arrested = pd?.dateofarrest ? moment(pd.dateofarrest) : null;
  const freed = pd?.freedomdate ? moment(pd.freedomdate) : null;

  const pictureUrl = data?.prisoner?.featuredImage?.node.mediaItemUrl ?? '';

  if (!data?.prisoner) return;

  return (
    <Grid
      container
      maxWidth={{ xs: '100%', lg: '1200px' }}
      margin="auto"
      flexDirection="column"
      mt={4}
      mb={8}
      position="relative"
    >
      <Scroll />
      <ProfileImage
        alt={pd?.name ?? 'profile'}
        width={297}
        height={306}
        src={getPrisonerPicture(pictureUrl, pd?.sex)}
      />
      <Grid item ml={40} mb={4}>
        <Typography variant="h1">
          {pd?.name && pd?.name.split(' ')[0]}
        </Typography>
        <Typography variant="h2">
          {pd?.name && pd.name.split(' ').slice(1).join(' ')}
        </Typography>
      </Grid>
      <DrawingFrame width="100%" p={4} alignSelf="center" item mb={3}>
        <Grid flexDirection="column" container>
          <Grid ml={36} item>
            <Grid spacing={1} mb={2} container>
              {data.prisoner.article?.map((article) => (
                <Grid key={article} item>
                  <Article label={article} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`День рождения: ${
                birthday
                  ? `${birthday.format('DD MMMM YYYY')} (${parseInt(
                      birthday.fromNow(),
                    )})`
                  : '–'
              }`}
            </Typography>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`Дата задержания: ${
                arrested ? arrested.format('DD MMMM YYYY') : '–'
              }`}
            </Typography>
          </Grid>
          <Grid ml={36} item>
            <Typography variant="p3">
              {`Освобождается: ${freed ? freed.format('DD MMMM YYYY') : '–'}`}
            </Typography>
          </Grid>
          <Grid ml={36} item mb={4}>
            <Typography variant="p3">Следующий суд: –</Typography>
          </Grid>
          <Grid item>
            <Typography variant="p1">
              {data?.prisoner?.prisonerData?.description}
            </Typography>
          </Grid>
          <Grid mt={10} item>
            <Grid container columnGap={2}>
              <Grid item>
                <Button>написать письмо</Button>
              </Grid>
              <Grid item>
                <Button variant="outline">помочь по-другому</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DrawingFrame>

      <Grid width="100%" mt={2} item>
        <Cards />
      </Grid>
    </Grid>
  );
}
