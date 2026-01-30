// src/pages/TableList.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import ParkRow from "../components/ParkRow";

function TableList() {
    const [parks, setParks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:10000/app/get_parks')
            .then(res => res.json())
            .then(res => setParks(res));
    }, []);

    return (
        <Box sx={{ bgcolor: '#e0e0e0', minHeight: '100vh', p: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                <Typography variant="h3" sx={{ color: '#2ecc71', fontWeight: 'bold' }}>
                    Widok tabelaryczny
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to="/list"
                    sx={{ bgcolor: '#2ecc71', '&:hover': { bgcolor: '#27ae60' } }}
                >
                    Zmień na widok kafelków
                </Button>
            </Box>

            <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ bgcolor: '#333' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'white' }}>Nazwa parku</TableCell>
                            <TableCell sx={{ color: 'white' }}>Miasto</TableCell>
                            <TableCell sx={{ color: 'white' }} align="right">Ocena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {parks.data?.map((park) => (
                            <ParkRow key={park.name} park={park} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default TableList;