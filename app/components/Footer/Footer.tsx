import { Grid } from '@mui/material';
import Image from 'next/image';

import { Button } from '../../../components/atoms/Button/Button';
import { Typography } from '../../../components/typography/Typography/Typography';
import { DrawingFrame } from '../../components/DrawingFrame/DrawingFrame';
export default function Footer() {
  return (
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
        height={{ xs: '620px', lg: '343px' }}
        width="100%"
        p={3}
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
              <Button>Поддержать</Button>
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
              <Button>Поддержать</Button>
            </div>
          </Grid>
          <Grid item flex={1} pt={5}>
            <Typography variant="subtitle1" textAlign="center" width="100%">
              Или перевести напрямую по следующим реквизитам:
            </Typography>
          </Grid>
        </Grid>
      </DrawingFrame>
      <Grid item mt={4.5} alignSelf="center">
        <Typography variant="subtitle1" textAlign="center">
          Также вы можете купить наш мерч:
        </Typography>
      </Grid>
      <Grid item alignSelf="center" maxWidth={748} width="100%" mt={3}>
        <Grid container justifyContent={{ xs: 'center', lg: 'space-between' }}>
          <DrawingFrame
            item
            width={313}
            height={325}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              alt="merch_1"
              width={364}
              height={210}
              src="/merch_1.png"
              className="footer__merch"
            />
          </DrawingFrame>
          <DrawingFrame
            item
            width={313}
            height={325}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              alt="merch_2"
              width={364}
              height={210}
              src="/merch_2.png"
              className="footer__merch"
            />
          </DrawingFrame>
        </Grid>
      </Grid>
      <Grid item mt={3} mb={14} alignSelf="center">
        <Button>В МАГАЗИН</Button>
      </Grid>
    </Grid>
  );
}
