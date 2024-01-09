import { useMemo } from 'react';

import { usePrisonersQuery } from '../generated';

export const usePrisoners = () => {
  const { loading, error, data } = usePrisonersQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  console.log(loading, error, data);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
