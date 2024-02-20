'use client';

import { Grid, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../../components/atoms/Button/Button';
import { Typography } from '../../../components/typography/Typography/Typography';
import { DrawingFrame } from '../../components/DrawingFrame/DrawingFrame';

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.brand.green,
}));

export default function Footer() {
  return (
    <Grid
      width="100%"
      flexDirection="column"
      justifyContent="center"
      id="footer"
      container
    >
      <Grid item flex={1}>
        <Grid
          container
          maxWidth={1200}
          width="100%"
          flexDirection="column"
          margin="auto"
          className="footer"
          py={{ xs: 6, lg: 10.75 }}
          px={2}
        >
          <Grid alignSelf="flex-start" item>
            <Typography variant="h1" color="brand.yellow">
              Помочь нашему
              <br />
              проекту
            </Typography>
          </Grid>
          <Grid
            item
            pt={2}
            my={8}
            maxWidth={{ xs: '100%', lg: '594px' }}
            alignSelf="center"
          >
            <Typography variant="subtitle1" textAlign="center">
              Проект существует на пожертвования. Помогите проекту держаться на
              плаву и развиваться!
            </Typography>
          </Grid>
          <DrawingFrame
            maxWidth={{ xs: '380px', lg: '796px' }}
            width="100%"
            p={3}
            pb={4}
            alignSelf="center"
            item
          >
            <Grid container>
              <Grid item flexBasis="100%">
                <Typography variant="subtitle1" textAlign="center" width="100%">
                  Вы можете поддержать нас через Boosty или Patreon:
                </Typography>
              </Grid>
              <Grid
                flexBasis={{ xs: '100%', lg: '50%' }}
                alignSelf="end"
                textAlign="center"
              >
                <Image
                  alt="boosty"
                  src="/boosty.png"
                  width={181}
                  height={57}
                  className="footer__image"
                />
                <div>
                  <Link href="https://boosty.to/avtozaklive" target="_blank">
                    <Button>Поддержать</Button>
                  </Link>
                </div>
              </Grid>
              <Grid
                flexBasis={{ xs: '100%', lg: '50%' }}
                alignSelf="end"
                textAlign="center"
              >
                <Image
                  alt="patreon"
                  src="/patreon.png"
                  width={208}
                  height={71}
                  className="footer__image"
                />
                <div>
                  <Link href="https://www.patreon.com/avtozak" target="_blank">
                    <Button>Поддержать</Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </DrawingFrame>
        </Grid>
      </Grid>
      <StyledGrid flex={1} item py={6} px={{ xs: 2, lg: 6 }}>
        <Typography variant="p3" component="p" width={1200} color="white">
          Дизайн сайта разработан студией Neklistic
        </Typography>
      </StyledGrid>
    </Grid>
  );
}
