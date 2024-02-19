import { useMemo } from 'react';

import { usePrisonerQuery } from '../generated';

export const usePrisoner = (id: string) => {
  const { loading, error, data } = usePrisonerQuery({
    variables: { id },
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
