import { useMemo } from 'react';

import { usePrisonerStatusCountsQuery } from '../generated';

export const usePrisonersStats = () => {
  const { loading, error, data } = usePrisonerStatusCountsQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
