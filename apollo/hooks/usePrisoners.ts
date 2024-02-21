import { useMemo } from 'react';

import { usePrisonersQuery } from '../generated';
export type Prisoners = NonNullable<
  NonNullable<ReturnType<typeof usePrisoners>['data']>['prisoners']
>['edges'];
export type Prisoner = Prisoners[number]['node'];

export const usePrisoners = () => {
  const { loading, error, data } = usePrisonersQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
};
