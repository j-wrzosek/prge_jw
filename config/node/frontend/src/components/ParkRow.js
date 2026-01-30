import React from 'react';
import { TableRow, TableCell} from '@mui/material';


function ParkRow({ park }) {
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ fontWeight: 'bold' }}>{park.name}</TableCell>
            <TableCell>{park.city}</TableCell>
            <TableCell align="right">{park.rating}</TableCell>
        </TableRow>
    );
}

export default ParkRow;