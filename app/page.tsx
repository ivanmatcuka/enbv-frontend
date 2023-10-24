import { Grid } from '@mui/material';

import styles from './page.module.css';

import { Typography } from '../components/Typography/Typography';

export default function Home() {
  return (
    <Grid container className={styles.header}>
      <Grid item>
        <Grid container>
          <Grid item>
            <Typography variant="h1">Голос для тех, кто вычеркнут</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
