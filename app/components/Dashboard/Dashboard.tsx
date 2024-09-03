'use client';

import { Grid, styled } from '@mui/material';

import { usePrisonersStats } from '@/apollo/hooks/usePrisonersStats';
import { FreeNotFree } from '@/components/atoms/FreeNotFree/FreeNotFree';
import { SexAge } from '@/components/atoms/SexAge/SexAge';
import { Selector } from '@/components/molecules/Selector/Selector';
import { Counter } from '@/components/organisms/Counter/Counter';
import { Typography } from '@/components/typography/Typography/Typography';

const Heading = styled(Typography)({
  wordBreak: 'break-word',
});

export default function Dashboard() {
  const { data } = usePrisonersStats();

  const prisonerStatusCounts = data?.prisoner_statsCollection?.edges?.[0].node;

  return (
    <Grid container maxWidth={1200} margin="auto">
      <Grid item mb={4.5} flex="1 0 100%">
        <Heading variant="h1" color="brand.red">
          Антивоенное дело в цифрах
        </Heading>
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
            <Counter label="Всего фигурантов уголовных дел">
              {prisonerStatusCounts?.total_count}
            </Counter>
          </Grid>
          <Grid item>
            <Counter label="Имена фигурантов известны">
              {prisonerStatusCounts?.in_process_count}
            </Counter>
          </Grid>
          <Grid item>
            <Counter
              label="Заключенным можно написать"
              catPictureUrl="/cat_3.svg"
            >
              {prisonerStatusCounts?.address_count}
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
                    prisonerStatusCounts?.age_ranges
                      ? JSON.parse(prisonerStatusCounts?.age_ranges)?.map(
                          (ageRange: {
                            male: number;
                            female: number;
                            ageRange: string;
                          }) => ({
                            age: ageRange?.ageRange
                              ? parseInt(ageRange.ageRange)
                              : 0,
                            label: ageRange?.ageRange ?? '',
                            male: ageRange?.male ?? 0,
                            female: ageRange?.female ?? 0,
                          }),
                        )
                      : []
                  }
                />
              ),
            },
            {
              label: 'лишены свободы/на свободе',
              element: (
                <FreeNotFree
                  free={prisonerStatusCounts?.out_count ?? 0}
                  notFree={prisonerStatusCounts?.imprisoned_count ?? 0}
                />
              ),
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
