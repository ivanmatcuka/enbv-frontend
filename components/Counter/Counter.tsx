import { FC, PropsWithChildren } from 'react';

import { Typography } from '../Typography/Typography';

type CounterProps = {
  label: string;
};
export const Counter: FC<PropsWithChildren<CounterProps>> = ({
  children,
  label,
}) => {
  return (
    <div>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="h1" component="p">
        {children}
      </Typography>
    </div>
  );
};
