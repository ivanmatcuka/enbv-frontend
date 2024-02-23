import { Grid, Input } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import {
  Prisoners,
  PrisonersInput,
  usePrisoners,
} from '../../../apollo/hooks/usePrisoners';
import { Button } from '../../../components/atoms/Button/Button';
import { CardPZ } from '../../../components/organisms/CardPZ/CardPZ';
import { Typography } from '../../../components/typography/Typography/Typography';

const DEFAULT_OFFSET = 9;

export const PrisonersList: FC = () => {
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [filter, setFilter] = useState<PrisonersInput>({});
  const [cachedPrisoners, setCachedPrisoners] = useState<Prisoners>([]);

  const { data, loading } = usePrisoners(offset, filter);

  const prisoners = data?.prisoners?.edges;

  useEffect(() => {
    if (!prisoners || loading) return;

    setCachedPrisoners(prisoners);
  }, [prisoners, loading]);

  return (
    <Grid
      container
      maxWidth={1200}
      margin="auto"
      alignItems="start"
      position="relative"
      gap={7.25}
    >
      <Grid item textAlign="left" zIndex={200}>
        <Typography variant="h1" color="brand.red">
          Список
          <br />
          преследуемых
        </Typography>
      </Grid>

      <Grid item>
        <Grid container width="100%">
          <Grid item flexBasis={{ xs: 'auto', lg: 500 }}>
            <Image
              height={320}
              width={500}
              alt="photos"
              src="/photos.png"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item flexBasis={{ xs: 'auto', lg: 'calc(100% - 500px)' }}>
            <Typography
              variant="subtitle1"
              color="brand.black"
              component="span"
            >
              Здесь собраны истории тех, кто заперт за решёткой из-за своих
              убеждений. Не все они признаны политзаключёнными. Среди фигурантов
              этих уголовных дел есть люди с разными политическими взглядами.
              <br />
              <br />
              Если бы не российский политический режим и война, все они были бы
              на свободе. Мы можем рассказать о несправедливо заключённых людях,
              чтобы о них узнали во всем мире. В этом списке важно каждое имя.
            </Typography>
          </Grid>
          <Grid item flexBasis="100%" mt={9.25}>
            <Input
              startAdornment="🔎"
              placeholder="Поиск по ФИО"
              style={{
                width: '100%',
              }}
              onChange={(e) => {
                setFilter({ ...filter, search: e.target.value });
              }}
            />
          </Grid>
          <Grid item flex={1} mt={10}>
            <Grid container rowSpacing={8.5} justifyContent="center">
              {cachedPrisoners.map(({ node: prisoner }, index) => (
                <Grid
                  item
                  xs={12}
                  lg={4}
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <CardPZ
                    articles={prisoner.article}
                    body={prisoner.prisonerData?.description}
                    name={prisoner.prisonerData?.name}
                    sex={prisoner.prisonerData?.sex}
                    pictureUrl={prisoner.featuredImage?.node.mediaItemUrl ?? ''}
                    primaryAction={
                      <Link
                        href={`/prisoner/${prisoner.id}`}
                        key={prisoner.id}
                        scroll
                      >
                        <Button>написать ✉</Button>
                      </Link>
                    }
                    secondaryAction={
                      <Link
                        href={`/prisoner/${prisoner.id}`}
                        key={prisoner.id}
                        scroll
                      >
                        <Button variant="outline">помочь</Button>
                      </Link>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid m="auto" item>
        <Button
          disabled={loading}
          variant="outline"
          onClick={() => setOffset(offset + DEFAULT_OFFSET)}
        >
          {loading ? 'загрузка...' : 'загрузить ещё'}
        </Button>
      </Grid>
    </Grid>
  );
};
