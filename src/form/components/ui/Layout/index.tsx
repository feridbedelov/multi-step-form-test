import { ReactNode } from 'react';
import { Typography } from '@mui/material';

import classes from './styles.module.scss';

export function Layout({ children }: { children: ReactNode }) {
  return <div className={classes.layoutContainer}>{children}</div>;
}

export function LayoutTitle({ children }: { children: ReactNode }) {
  return (
    <Typography variant="h4" align="center">
      {children}
    </Typography>
  );
}

export function LayoutActions({ children }: { children: ReactNode }) {
  return <div className={classes.actions}>{children}</div>;
}
