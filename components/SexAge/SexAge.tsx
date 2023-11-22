'use client';

import { styled } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react';

import { Typography } from '../Typography/Typography';

const StyledHeaderTypography = styled(Typography)({
  fontWeight: 600,
});

const StyledTable = styled(Table)({
  width: 'auto',
});

const StyledTableRow = styled(TableRow)({
  '&': {
    'td, th': {
      border: 0,
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));

type SexAgeItem = {
  age: number;
  label: string;
  male?: number;
  female?: number;
};
type SexAgeProps = {
  data: SexAgeItem[];
};
export const SexAge: FC<SexAgeProps> = ({ data }) => {
  return (
    <TableContainer>
      <StyledTable aria-label="sex-age">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="right">
              <StyledHeaderTypography variant="legend">
                Ж
              </StyledHeaderTypography>
            </StyledTableCell>
            <StyledTableCell />
            <StyledTableCell align="left">
              <StyledHeaderTypography variant="legend">
                М
              </StyledHeaderTypography>
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {[...data]
            .sort((a, b) => b.age - a.age)
            .map((row) => (
              <StyledTableRow key={row.label}>
                <StyledTableCell align="right">
                  {Array.from(Array(row.female).keys()).map((_, index) => (
                    <img key={index} src="/person.svg" />
                  ))}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="legend">{row.label}</Typography>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ maxWidth: 325 }}>
                  {Array.from(Array(row.male).keys()).map((_, index) => (
                    <img key={index} src="/person.svg" />
                  ))}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
