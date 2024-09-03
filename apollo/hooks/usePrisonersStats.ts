import { useMemo } from 'react';

import { usePrisonerStatusCountsQuery } from '../generated';

export const usePrisonersStats = () => {
  const { loading, error, data } = usePrisonerStatusCountsQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  const result = useMemo(
    () => data?.prisoner_statsCollection?.edges[0].node,
    [data?.prisoner_statsCollection?.edges],
  );

  return useMemo(
    () => ({ loading, error, data: result }),
    [loading, error, result],
  );
};
