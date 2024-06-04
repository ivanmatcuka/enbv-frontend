export const revalidate = 0;

import { Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/ru';
import { Metadata } from 'next';
moment.locale('ru_RU');

import { PrisonersDocument, PrisonersQueryResult } from '@/apollo/generated';
import { Prisoner } from '@/apollo/hooks/usePrisoners';
import { Cards } from '@/app/components/Cards/Cards';
import { DrawingFrame } from '@/app/components/DrawingFrame/DrawingFrame';
import { LetterDialog } from '@/app/components/LetterDialog/LetterDialog';
import { PrisonerArticles } from '@/app/components/PrisonerArticles/PrisonerArticles';
import { Status } from '@/app/components/Status/Status';
import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { getPrisonerPicture } from '@/helpers/getPrisonerPicture';
import { makeClient } from '@/helpers/makeClient';

import {
  DescriptionLayout,
  EmptyProfileImage,
  EmptyProfileImageContainer,
  ProfileImage,
  ProfileImageContainer,
} from './ui';

type Props = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const prisoner = await getPrisoner(params.slug);
  const title = `${
    prisoner?.prisonerData?.name ?? 'Страница заключенного'
  } — Если б не было войны`;
  const picture = prisoner?.featuredImage?.node.mediaItemUrl;
  const description = 'Платформа для помощи политзаключенным в России';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: picture ? [getPrisonerPicture(picture)] : undefined,
    },
  };
}

export default async function PrisonerPage({
  params,
}: {
  params: { slug: string };
}) {
  const prisoner = await getPrisoner(params.slug);
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
                  {prisoner && pd?.canwrite && (
                    <LetterDialog prisoner={prisoner} />
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

const getPrisoner = async (slug: string): Promise<Prisoner | null> => {
  const client = makeClient();

  const res: Partial<PrisonersQueryResult> = await client.query({
    query: PrisonersDocument,
    variables: { offset: 1, filter: { slug } },
    errorPolicy: 'all',
    fetchPolicy: 'no-cache',
  });

  return res.data?.prisoners?.edges[0]?.node ?? null;
};
