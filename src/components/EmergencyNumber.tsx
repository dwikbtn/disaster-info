import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const EmergencyNumber = (): JSX.Element => {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        color="initial"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        Indonesian Emergency Call
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Institution</TableCell>
              <TableCell align="center">Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Police - General Emergencies</TableCell>
              <TableCell align="center">110</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Ambulance and Rescue</TableCell>
              <TableCell align="center">118</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">National Search and Rescue</TableCell>
              <TableCell align="center">115</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Fire</TableCell>
              <TableCell align="center">113</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Medical Emergencies</TableCell>
              <TableCell align="center">119</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmergencyNumber;
