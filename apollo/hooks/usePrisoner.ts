import { useMemo } from 'react';

import { StringFilter, usePrisonerQuery } from '../generated';

export const usePrisoner = (id: string) => {
  const stringFilter: StringFilter = { eq: id };
  const { loading, error, data } = usePrisonerQuery({
    variables: { id: stringFilter },
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
