import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function Userform({ userData, setUserData }) {


  return (
    <div className='center'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SN</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              userData&&userData?.map((item, ind) => {
                return (
                  <TableRow>
                    <TableCell>{ind + 1}</TableCell>
                    <TableCell>{item?.firstName}</TableCell>
                    <TableCell>{item?.firstName}</TableCell>
                    <TableCell>{item?.firstName}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>

      </TableContainer>
    </div>
  );
}