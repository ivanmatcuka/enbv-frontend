'use client';

import { Grid, styled } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { useState } from 'react';
moment.locale('ru_RU');

import { usePrisoners } from '@/apollo/hooks/usePrisoners';
import { Cards } from '@/app/components/Cards/Cards';
import { MessageDialog } from '@/app/components/Dialog/Dialog';
import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { PrisonerArticles } from '@/app/components/PrisonerArticles/PrisonerArticles';
import { Status } from '@/app/components/Status/Status';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';

const ProfileImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 100,

  filter: 'drop-shadow(4px 4px 0px #000000)',

  [theme.breakpoints.down('lg')]: {
    position: 'static',
  },
}));

const EmptyProfileImageContainer = styled(ProfileImageContainer)({
  filter: 'none',
});

const ProfileImage = styled('img')(({ theme }) => ({
  objectFit: 'cover',

  clipPath: 'polygon(98% 0, 100% 74%, 96% 100%, 0 97%, 4% 0)',

  [theme.breakpoints.down('lg')]: {
    width: 184,
    height: 188,
  },
}));

const EmptyProfileImage = styled(ProfileImage)({
  clipPath: 'none',
});

const DescriptionLayout = styled(Typography)({
  p: {
    '&:first-of-type': {
      marginTop: 0,
    },
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
});

export default function Prisoner({ params }: { params: { slug: string } }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, loading } = usePrisoners(1, {
    slug: params.slug,
  });

  const prisoner = data?.prisoners?.edges[0]?.node;
  const pd = prisoner?.prisonerData;

  const birthday = pd?.birthdate ? moment(pd.birthdate) : null;
  const birthdayString = `День рождения: ${
    birthday
      ? `${birthday.format('DD MMMM YYYY')} (${parseInt(birthday.fromNow())})`
      : '–'
  }`;

  const arrested = pd?.dateofarrest ? moment(pd.dateofarrest) : null;
  const arrestedString = `Дата задержания: ${
    arrested ? arrested.format('DD MMMM YYYY') : '–'
  }`;

  const freed = pd?.freedomdate ? moment(pd.freedomdate) : null;
  const freedString = `Освобождается: ${
    freed ? freed.format('DD MMMM YYYY') : '–'
  }`;

  const pictureUrl = prisoner?.featuredImage?.node.mediaItemUrl;

  return (
    <Grid container>
      {/* TODO: refactor to SSR */}
      {/* <title>{pd?.name}</title>
      <meta
        property="og:title"
        content={`${pd?.name} | Если б не было войны`}
      />
      <meta
        property="og:description"
        content={pd?.description ?? 'Если б не было войны'}
      /> */}

      {prisoner && (
        <MessageDialog
          prisoner={prisoner}
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
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
          {pictureUrl ? (
            <ProfileImageContainer>
              <ProfileImage
                alt={pd?.name ?? 'profile'}
                width={297}
                height={306}
                src={pictureUrl}
              />
            </ProfileImageContainer>
          ) : (
            <EmptyProfileImageContainer>
              <EmptyProfileImage
                alt="profile'"
                width={297}
                height={306}
                src={getPrisonerPicture(pictureUrl, pd?.sex)}
              />
            </EmptyProfileImageContainer>
          )}
          <Grid item ml={{ xs: 0, lg: 40 }} minHeight={{ xs: 'auto', lg: 128 }}>
            <Typography variant="h1">
              {pd?.name && pd?.name.split(' ')[0]}
            </Typography>
            <Typography variant="h2" mb={2}>
              {pd?.name && pd.name.split(' ').slice(1).join(' ')}
            </Typography>
            {pd?.status && <Status status={pd?.status} />}
          </Grid>
          <DrawingFrame
            width="100%"
            alignSelf="center"
            item
            mb={3}
            mt={2}
            px={{ xs: 2, lg: 4 }}
            py={4}
          >
            <Grid flexDirection="column" container>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Grid spacing={1} mb={2} container>
                  {loading && <Typography variant="p3">Загрузка...</Typography>}
                  {Array.isArray(prisoner?.article) && (
                    <PrisonerArticles articles={prisoner.article as string[]} />
                  )}
                </Grid>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">{birthdayString}</Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">{arrestedString}</Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">{freedString}</Typography>
              </Grid>
              <Grid ml={{ xs: 0, lg: 36 }} item>
                <Typography variant="p3">Следующий суд: –</Typography>
              </Grid>
              <Grid item my={4}>
                <DescriptionLayout variant="p2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: prisoner?.content ?? '',
                    }}
                  />
                </DescriptionLayout>
              </Grid>
              {!!pd?.mailinterestsparsed && (
                <Grid item>
                  <Typography variant="p2" color="gray">
                    Интересы: {pd?.mailinterestsparsed}
                  </Typography>
                </Grid>
              )}
              <Grid mt={10} item>
                <Grid
                  container
                  columnGap={2}
                  rowGap={4}
                  alignItems="center"
                  flexDirection={{ xs: 'column', lg: 'row' }}
                >
                  {pd?.canwrite && (
                    <Grid item>
                      <Button onClick={() => setIsDialogOpen(true)}>
                        написать письмо
                      </Button>
                    </Grid>
                  )}
                  <Grid item>
                    <a href="https://t.me/avtozakinfo_bot" target="_blank">
                      <Button variant="outline">Сообщить о неточности</Button>
                    </a>
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
