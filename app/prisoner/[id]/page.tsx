'use client';

import { Grid, styled } from '@mui/material';
import moment from 'moment';

import { Cards } from '@/app/components/Cards/Cards';
import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { Article } from '@/components/atoms/Article/Article';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';

import { usePrisoner } from '../../../apollo/hooks/usePrisoner';

const ProfileImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  zIndex: 100,

  inset: 0,

  objectFit: 'cover',

  [theme.breakpoints.down('lg')]: {
    position: 'static',

    width: 184,
    height: 188,
  },
}));

export default function Prisoner({ params }: { params: { id: string } }) {
  const { data, loading } = usePrisoner(params.id);

  const pd = data?.prisoner?.prisonerData;

  const birthday = pd?.birthdate ? moment(pd.birthdate) : null;
  const arrested = pd?.dateofarrest ? moment(pd.dateofarrest) : null;
  const freed = pd?.freedomdate ? moment(pd.freedomdate) : null;

  const pictureUrl = data?.prisoner?.featuredImage?.node.mediaItemUrl;

  return (
    <Grid container>
      <Grid
        item
        width="100%"
        padding={{ xs: 1, sm: 2, lg: 10.75 }}
        pt={{ xs: 0, sm: 0, lg: 0 }}
      >
        <Grid
          container
          maxWidth={{ xs: '100%', lg: '1200px' }}
          margin="auto"
          flexDirection="column"
          mt={4}
          mb={8}
          position="relative"
        >
          <Grid item ml={{ xs: 0, lg: 40 }} mb={4}>
            <Typography variant="h1">
              {pd?.name && pd?.name.split(' ')[0]}
            </Typography>
            <Typography variant="h2">
              {pd?.name && pd.name.split(' ').slice(1).join(' ')}
            </Typography>
          </Grid>
          <ProfileImage
            alt={pd?.name ?? 'profile'}
            width={297}
            height={306}
            src={getPrisonerPicture(pictureUrl, pd?.sex)}
          />
          <DrawingFrame
            width="100%"
            p={4}
            alignSelf="center"
            item
            mb={3}
            mt={{ xs: '-40px', lg: 'auto' }}
            pt={{ xs: 10, lg: 4 }}
          >
            <Grid flexDirection="column" container>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Grid spacing={1} mb={2} container>
                  {loading && 'Загрузка...'}
                  {data?.prisoner &&
                    data.prisoner.article?.map((article) => (
                      <Grid key={article} item>
                        <Article label={article} />
                      </Grid>
                    ))}
                </Grid>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
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
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">
                  {`Дата задержания: ${
                    arrested ? arrested.format('DD MMMM YYYY') : '–'
                  }`}
                </Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">
                  {`Освобождается: ${
                    freed ? freed.format('DD MMMM YYYY') : '–'
                  }`}
                </Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item mb={4}>
                <Typography variant="p3">Следующий суд: –</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p1">
                  {data?.prisoner?.prisonerData?.description}
                </Typography>
              </Grid>
              <Grid mt={10} item>
                <Grid
                  container
                  columnGap={2}
                  rowGap={4}
                  alignItems="center"
                  flexDirection={{ xs: 'column', lg: 'row' }}
                >
                  {!!data?.prisoner?.prisonerData?.addressparsed && (
                    <Grid item>
                      <Button>написать письмо</Button>
                    </Grid>
                  )}
                  <Grid item>
                    <Button variant="outline" disabled>
                      помочь по-другому
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DrawingFrame>

          <Grid width="100%" mt={2} item>
            <Cards />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
