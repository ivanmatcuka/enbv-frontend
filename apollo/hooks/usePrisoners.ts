import { useMemo } from 'react';

import { PrisonersQueryResult, usePrisonersQuery } from '../generated';

export type Prisoners = NonNullable<
  NonNullable<PrisonersQueryResult['data']>['prisoners']
>['edges'];
export type Prisoner = Prisoners[number]['node'];

export const usePrisoners = () => {
  const { loading, error, data } = usePrisonersQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
