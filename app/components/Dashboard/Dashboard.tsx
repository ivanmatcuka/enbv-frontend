'use client';

import { Grid } from '@mui/material';

import { usePrisonersStats } from '@/apollo/hooks/usePrisonersStats';
import { FreeNotFree } from '@/components/atoms/FreeNotFree/FreeNotFree';
import { SexAge } from '@/components/atoms/SexAge/SexAge';
import { Selector } from '@/components/molecules/Selector/Selector';
import { Counter } from '@/components/organisms/Counter/Counter';
import { Typography } from '@/components/typography/Typography/Typography';

export default function Dashboard() {
  const { data } = usePrisonersStats();

  const prisonerStatusCounts = data?.prisonerStatusCounts;

  return (
    <Grid container maxWidth={1200} margin="auto">
      <Grid item mb={4.5} flex="1 0 100%">
        <Typography variant="h1" color="brand.red">
          Числа и лица
        </Typography>
      </Grid>
      <Grid item width={392}>
        <Grid
          container
          flexDirection="column"
          alignItems="baseline"
          justifyContent="space-between"
          height={{ xs: 443, lg: 575 }}
        >
          <Grid item>
            <Counter label="Всего политзаключённых:">
              {prisonerStatusCounts?.totalCount}
            </Counter>
          </Grid>
          <Grid item>
            <Counter label="Сколько дел в процессе">
              {prisonerStatusCounts?.imprisonedCount}
            </Counter>
          </Grid>
          <Grid item>
            <Counter
              label="Писем сегодня отправлено:"
              catPictureUrl="/cat_sad.svg"
            >
              0
            </Counter>
          </Grid>
          <Grid item>{/* <Button>НАПИСАТЬ ПИСЬМО</Button> */}</Grid>
        </Grid>
      </Grid>
      {/* Right */}
      <Grid item mt={{ xs: 3, lg: -1.5 }} mb={{ xs: 8 }}>
        <Selector
          items={[
            {
              label: 'по полу и возрасту:',
              element: (
                <SexAge
                  data={
                    prisonerStatusCounts?.ageRanges
                      ? prisonerStatusCounts.ageRanges.map((ageRange) => ({
                          age: ageRange?.ageRange
                            ? parseInt(ageRange.ageRange)
                            : 0,
                          label: ageRange?.ageRange ?? '',
                          male: ageRange?.male ?? 0,
                          female: ageRange?.female ?? 0,
                        }))
                      : []
                  }
                />
              ),
            },
            {
              label: 'на свободе/под стражей',
              element: (
                <FreeNotFree
                  free={prisonerStatusCounts?.outCount ?? 0}
                  notFree={prisonerStatusCounts?.imprisonedCount ?? 0}
                />
              ),
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}