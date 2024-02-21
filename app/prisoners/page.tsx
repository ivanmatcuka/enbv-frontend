'use client';

import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

import { usePrisoners } from '../../apollo/hooks/usePrisoners';
import { Button } from '../../components/atoms/Button/Button';
import { CardPZ } from '../../components/organisms/CardPZ/CardPZ';
import { Typography } from '../../components/typography/Typography/Typography';
export default function Prisoners() {
  const { data } = usePrisoners();

  return (
    <Grid container>
      <Grid
        item
        className={styles.list}
        id="list"
        width="100%"
        position="relative"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
      >
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
                  убеждений. Не все они признаны политзаключёнными. Среди
                  фигурантов этих уголовных дел есть люди с разными
                  политическими взглядами.
                  <br />
                  <br />
                  Если бы не российский политический режим и война, все они были
                  бы на свободе. Мы можем рассказать о несправедливо заключённых
                  людях, чтобы о них узнали во всем мире. В этом списке важно
                  каждое имя.
                </Typography>
              </Grid>
              <Grid item flex={1} mt={10}>
                <Grid container rowSpacing={8.5} justifyContent="center">
                  {data?.prisoners &&
                    data.prisoners.edges.map(({ node: card }, index) => (
                      <Grid
                        item
                        xs={12}
                        lg={4}
                        key={index}
                        display="flex"
                        justifyContent="center"
                      >
                        <CardPZ
                          articles={card.article ?? []}
                          body={card.prisonerData?.description ?? ''}
                          name={card.prisonerData?.name ?? ''}
                          sex={card.prisonerData?.sex ?? ''}
                          pictureUrl={
                            card.featuredImage?.node.mediaItemUrl ?? ''
                          }
                          primaryAction={
                            <Link
                              href={`/prisoner/${card.id}`}
                              key={card.id}
                              scroll
                            >
                              <Button>написать ✉</Button>
                            </Link>
                          }
                          secondaryAction={
                            <Link
                              href={`/prisoner/${card.id}`}
                              key={card.id}
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
        </Grid>
      </Grid>
    </Grid>
  );
}
