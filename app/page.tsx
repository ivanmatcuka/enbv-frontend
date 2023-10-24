import { Grid } from '@mui/material';

import styles from './page.module.css';

import { Typography } from '../components/Typography/Typography';
import { Logo } from '../components/Logo/Logo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid container margin="86px" height={822} maxWidth={1200}>
        <Grid item>
          <Grid container height={650} direction="row">
            <Grid item flex={1}>
              {/* Left */}
              <Grid container>
                <Grid item mb="89px">
                  <Logo />
                </Grid>
                <Grid item mb={4.5}>
                  <Typography variant="h1" color="brand.red">
                    Голос для тех, кто вычеркнут
                  </Typography>
                </Grid>
                <Grid item margin="auto">
                  <Typography
                    variant="subtitle1"
                    textAlign="left"
                    width={493}
                    lineHeight="32.74px"
                  >
                    Помогите людям, которые подверглись репрессиям за свои
                    взгляды!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item width={493}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
